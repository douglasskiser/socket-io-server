const onConnect = socket => socket.on('connection', clientSocket => {
  console.log('connected dude')
});

export default socket => {
  onConnect(socket);
};