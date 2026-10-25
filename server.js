const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 3000);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.webp':'image/webp', '.jpg':'image/jpeg', '.pdf':'application/pdf', '.woff2':'font/woff2', '.xml':'application/xml', '.txt':'text/plain; charset=utf-8' };
const publicFiles = new Set(['manus-routes.json','robots.txt','sitemap.xml','favicon.svg','404.html']);
const server = http.createServer((req, res) => {
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405, {Allow:'GET, HEAD'});return res.end();}
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch {res.writeHead(400);return res.end('Invalid URL');}
  let relative = pathname.replace(/^\/+/, '');
  if (pathname.includes('\0') || pathname.includes('\\')) {res.writeHead(400);return res.end('Invalid URL');}
  if (publicFiles.has(relative)) relative = 'public/' + relative;
  const target = path.resolve(root, relative || 'index.html');
  if (!target.startsWith(root + path.sep)) {res.writeHead(403);return res.end('Forbidden');}
  relative = path.relative(root, target);
  const serve = (file, status=200) => {
    fs.readFile(file, (error, bytes) => {
      if (error) {
        fs.readFile(path.join(root,'public/404.html'), (ignored, fallback) => {
          res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
          res.end(req.method==='HEAD' ? '' : fallback || 'Not found');
        });
        return;
      }
      res.writeHead(status, {'Content-Type':types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-cache'});
      res.end(req.method==='HEAD' ? '' : bytes);
    });
  };
  const permitted = !relative.split('/').some(part => part.startsWith('.')) && (relative.startsWith('assets/') || relative.startsWith('public/') || ['index.html','styles.css','script.js'].includes(relative) || /^(services|products|technology|about|work|insights|contact|privacy)(\/|$)/.test(relative));
  if (!permitted) return serve(path.join(root,'public/404.html'),404);
  fs.stat(target, (error, stats) => {
    if (!error && stats.isDirectory()) {
      if (!pathname.endsWith('/')) {res.writeHead(301,{Location:pathname + '/' + (new URL(req.url,'http://localhost').search)});return res.end();}
      return serve(path.join(target,'index.html'));
    }
    serve(target);
  });
});
server.listen(port, '0.0.0.0', () => console.log(`iMap Preview listening on ${port}`));
