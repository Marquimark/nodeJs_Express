require('dotenv').config();
const Server = require('./models/server');

// const express = require('express');
// const app = express();
// const port = process.env.PORT;

// app.get('/', ( req, res ) => {
//   res.send('Hola Mundo');
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const server = new Server();
server.listen();