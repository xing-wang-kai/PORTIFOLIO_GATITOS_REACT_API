import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import router from '../routes/index.js'

import db from '../database/connection.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

db.on('error', console.log.bind(console));
db.once('open', ()=>{console.log("conexão ao mongoosee realizada com sucesso")})

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-origin', '*');
    res.header('Access-Control-Allow-Methods', "GET, POST, DELETE, PATCH, PUT");
    res.header('Access-Control-Allow-Headers', 'X-PINGOUTHER, Authorization, Content-Type');
    app.use(cors());
    next();
})

app.use( '/static', express.static( path.join( __dirname, '../../public')));
app.use( express.urlencoded( {extended: true}));

router(app);

app.get("/", (req, res) => {
    res.status(200).json({message: "tetando a Rota!"})
})

app.use( (req, res) =>{
    res.status(404).json({message: "pagina não localizada"})
})

export default app;