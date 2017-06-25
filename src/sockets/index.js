const onDisconnect = clientSocket => clientSocket.on('disconnect', () => {
  console.log('user disconnected');
});

const onConnect = socket => socket.on('connection', clientSocket => {
  console.log('user connected');
  onDisconnect(clientSocket);
});

export default socket => onConnect(socket);