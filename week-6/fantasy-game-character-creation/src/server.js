const http = require('http');
const url = require('url');

let character = {};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedUrl.pathname;

  if (method === 'POST' && pathname === '/create-character') {
    const { class: charClass, gender, funFact } = parsedUrl.query;
    character = { class: charClass, gender, funFact };
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Character created' }));
  } else if (method === 'POST' && pathname === '/confirm-character') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Character creation confirmed' }));
  } else if (method === 'GET' && pathname === '/view-character') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(character));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;
