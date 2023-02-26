const axios = require('axios');


const getCharDetail = (res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {
        let character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name
        }
        res
        .writeHead(200, {'Content-Type': 'application/json'})
        .end(JSON.stringify(character))
    })
    .catch(err => 
        res
        .writeHead(500, {'Content-Type': 'text/plain'})
        .end(`El personaje con id: ${id} no fue encontrado`)
        )

};

module.exports = getCharDetail;