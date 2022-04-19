import app from './src/config/expressCustom.js';
import 'dotenv/config';

const port = process.env.PORT|| 3001;

let server =  app.listen(port, ()=>{
    console.log(`logado com sucesso em http://localhost:${port}`)
})

server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});