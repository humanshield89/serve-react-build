const express = require('express');
const compression = require('compression');
const path = require('path');
require('dotenv').config({path: __dirname + '/.env'})
const app = express();

const cors = require('cors');

//TODO maybe add more strict options later
if(process.env.APP_CORS === '1')
app.use(cors({
    origin : "*",
    credentials : true,
}));

if(process.env.APP_COMPRESSION === '1')
    app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.APP_PORT ? process.env.APP_PORT : 3000;

app.listen(port, () => {
    console.log('APP now listning on port: ' + port )
});