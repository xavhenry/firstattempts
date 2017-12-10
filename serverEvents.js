var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200);
    res.end('Merci tout le monde !');
});

server.on('close', function() { // On écoute l'événement close
    console.log('Bye bye !');
})

server.listen('8080'); // On démarre le server

server.close(); // On arrête le server
