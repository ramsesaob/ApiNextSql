// server.js
const express = require('express');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Configura CORS
    server.use(cors());

    // Maneja todas las solicitudes con el manejador de Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // Escucha en el puerto 3000
    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
