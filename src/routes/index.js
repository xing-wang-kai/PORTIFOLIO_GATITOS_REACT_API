import express from 'express';
import bodyParser from 'body-parser';

import postRouter from './pots.routes.js';

const app = express();
app.use(bodyParser.json())

const router = (app) => {

    app.use(postRouter);

}

export default router;