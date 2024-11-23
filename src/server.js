import http from 'node:http';

const consoleServer = (res, message) => {
    res.end(message);
}

const server = http.createServer((req, res) => consoleServer(res, 'hello node'));

server.listen(3333);