import express from 'express'
import config from './config.json'

const PORT = config.port || 3000
const server = express()

server.get('/', (req, res) => {
    res.send('Hello world!')
})

server.listen(PORT)
console.log(`Listening on port ${PORT}`)