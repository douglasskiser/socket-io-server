import express from 'express';
import http from 'http';
import io from 'socket.io';
import initializeSockets from './sockets';
import initializeRoutes from './routes';

const app = express();
const server = http.Server(app);
const socket = io(server);

initializeRoutes(app);
initializeSockets(socket);

server.listen(3000, () => console.log('listening on *:3000'));

export default app;