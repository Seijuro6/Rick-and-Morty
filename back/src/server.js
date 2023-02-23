const http = require('http');
const characters = require('./utils/data');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes('rickandmorty/character')) {
        const id = req.url.split('/').at(-1); // obtenemos el id del personaje
        const character = characters.filter(char => char.id == Number(id)); // buscamos el personaje en data.js siempre usar === toca parsear

        res
        .writeHead(200, {'Content-Type': 'application/json'}); // indicamos que la respuesta es un JSON
        res
        .end(JSON.stringify(character)); // enviamos como respuesta toda la información del personaje
      } else {
        res
        .writeHead(404, {'Content-Type': 'text/html'}); // si la URL no incluye el string, devolvemos un error 404
        res
        .end('404 Not Found');
      }
}).listen(3001, 'localhost')

