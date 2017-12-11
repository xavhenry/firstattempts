var http = require('http');
var eventEmitter = require('events').EventEmitter;

var server = http.createServer(function(req,res) {
    res.writeHead(200);
    res.end('Merci tout le monde !');
});

var jeu = new EventEmitter();

server.on('close', function() { // On écoute l'événement close
    console.log('Bye bye !');
})

jeu.emit('gameover', 'Vous avez perdu !');

server.listen('8080'); // On démarre le server

server.close(); // On arrête le server
