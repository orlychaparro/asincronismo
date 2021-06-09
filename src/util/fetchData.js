let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Se instala xmlhttpRequest en terminal con npm
// C:\rtc\asincronismo>npm install xmlhttprequest --save


//crea funcion fech 
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); // crea la consulta get a la url
        xhttp.onreadystatechange = (() => { // si cambia el estado
            if (xhttp.readyState === 4) { // si estado 4 cargo todo
                (xhttp.status === 200) ?
                resolve(JSON.parse(xhttp.responseText)) // if ternario no hace falta usar if
                    : reject(new Error('Error', url_api))



            }
        });
        xhttp.send();

    });
}

module.exports = fetchData;