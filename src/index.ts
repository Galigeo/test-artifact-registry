
import { POI } from "@galigeo-store/shared-models/dist/db";
import express = require('express');

const port = Number(process.env.PORT) || 5000;

const app = express();
app.enable('trust proxy');

console.log('Starting server on port ' + port);

console.log('POI comes from artifact registry');
const poi = new POI();

const server = app.use('/', (req, res, next) => {
    res.status(200).send('Alive test');
}).listen(port);

