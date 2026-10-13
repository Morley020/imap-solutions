const fs = require('node:fs');
const path = require('node:path');
require('./generate-site');
const root = __dirname;
const output = path.join(root, 'dist');
fs.rmSync(output, {recursive:true, force:true});
fs.mkdirSync(output, {recursive:true});
const routes = JSON.parse(fs.readFileSync(path.join(root, 'public/manus-routes.json'))).routes;
for (const route of routes) {
  const file = route.path === '/' ? 'index.html' : path.join(route.path.slice(1), 'index.html');
  const destination = path.join(output, file);
  fs.mkdirSync(path.dirname(destination), {recursive:true});
  fs.copyFileSync(path.join(root, file), destination);
}
for (const name of ['styles.css', 'script.js']) fs.copyFileSync(path.join(root, name), path.join(output, name));
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), {recursive:true, filter:src => !src.endsWith('.ttf') && !src.endsWith('zambia-location-map.svg')});
fs.cpSync(path.join(root, 'public'), output, {recursive:true});
console.log(`Built ${routes.length} pages in dist/. No source tools, secrets or archives are published.`);
