// Se instala xmlhttpRequest en terminal con npm
// C:\rtc\asincronismo>npm install xmlhttprequest --save

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

//crea funcion fech 
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // crea la consulta get a la url
    xhttp.onreadystatechange = function(event) { // si cambia el estado
        if (xhttp.readyState === 4) { // si estado 4 cargo todo
            if (xhttp.status === 200) { // si status 200 respuesta http ok
                callback(null, JSON.parse(xhttp.responseText)); // call back con el json parseado a text para ser objeto iterable
            } else { // si hay error
                const error = new Error('Error ' + url_api);
                return callback(error, null) // retorna el callback con el error
            }
        }
    }
    xhttp.send();
}


/*
El api trae el JSON 
{
    "info": {
        "count": 671,     // valor del data 1
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Rick Sanchez",   // data 2
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",  // data 3
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {



el api hace tres llamados callbacks 
data 1 trae todo el json y obtiene  data1.info.count  671
data 2 trae de data1 data1.results[0].id  data2.name  Rick Sanchez
data 3 trae de data2.origin.url  data3.dimension      Earth (C-137)


*/

fetchData(API, function(error1, data1) { // data trae todo el json
    if (error1) return console.error(error);
    fetchData(API + data1.results[0].id, function(error2, data2) { // data 2 trae el resul[0].id el id del primer result indice 0
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) { // data 3 trae el valor origin.url donse se obtiene la dimension
            if (error3) return console.error(error3);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})