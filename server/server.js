const express = require('express');
const cors = require('cors');
const path = require('path');
var port = process.env.PORT || 3000;


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));

//=====================================================================================

var scattergoriesStorage = {
    lettersLeft: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w'], //q, x, y, and z are omitted,
    gameData: []
};

var onConnectDoThese = (socket) => {
    console.log('There is a connection from the client to the server!!');
    console.log('Show client.id: ', socket.id )
    //socket.emit('loadGame', scattergoriesStorage);
    console.log('These are the current number of scattergories players: ', io.engine.clientsCount)
    socket.on('stopSignal', (playerData)=>{
        console.log('Received Stop Signal', playerData)
        socket.emit('stopRound');
    })
    socket.on('roundData', (roundData) => {
        scattergoriesStorage.gameData.push(roundData)
        socket.emit('endRoundWithAllData', scattergoriesStorage.gameData)
    })

}

io.on('connection', onConnectDoThese);


app.get('/', )

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


