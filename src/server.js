import app from './config/expressCustom.js';
import 'dotenv/config';

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`logado com sucesso em http://localhost:${port}`)
})