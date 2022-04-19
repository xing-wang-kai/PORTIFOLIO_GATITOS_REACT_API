import app from './src/config/expressCustom.js';
import 'dotenv/config';

const port = process.env.PORT|| 3030;

app.listen(port, ()=>{
    console.log(`logado com sucesso em http://localhost:${port}`)
})
