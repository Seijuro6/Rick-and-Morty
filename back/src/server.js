const http = require('http');
const getChardById = require('./controllers/getCharById');
const getCharDetail = require('./controllers/getCharDetail');



http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // let id = req.url.split('/').at(-1);
    let id = req.url.match(/\/([^\/]+)$/)[1];


    if (req.url.includes('onsearch')){     
      getChardById(res, id);
    }

    if (req.url.includes('detail')){
      getCharDetail(res, id);
    }

    
}).listen(3001, 'localhost')

