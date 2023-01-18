


const http = require('node:http');

http.createServer( (req,res) =>{
    console.log(req);

    // res.writeHead(200, { 'Content-Type' : 'text/plain' });
    // res.writeHead(200, { 'Content-Type' : 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv') //esto es para decir el nombre del archivo que se descarga
    // res.writeHead(200, { 'Content-Type' : 'application/csv' }); // esto es un archivo que se descarga

    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // }

    // res.write(JSON.stringify( persona ));

    // res.write('id, nombre\n')
    // res.write('1, Jorge\n')
    // res.write('2, Fernando\n')

    res.write('Hola mundo')
    res.end();

})
.listen( 8080 )

console.log('Escuchando en el puerto', 8080);