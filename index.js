const express = require('express')
const server = express()
const helmet = require('helmet')
require('dotenv').config()

const PORT = process.env.PORT_ENV || 5000

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => res.status(200).json({ api: 'up' }))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))

module.exports = server