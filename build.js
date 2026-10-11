const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const output = path.join(root, 'dist');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
fs.cpSync(path.join(root, 'public'), output, { recursive: true });
fs.copyFileSync(path.join(root, 'assets', 'imap-logo.svg'), path.join(output, 'favicon.svg'));
console.log('Static website built in dist/; source files, ZIP archives, and server code are not published.');
