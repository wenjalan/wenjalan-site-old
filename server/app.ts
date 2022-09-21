import express from 'express'
import config from './config.json'
import path from 'path'

const PORT = config.port || 3000
const server = express()

server.use(express.static('../client/build'))

server.get('/*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})

server.listen(PORT)
console.log(`Listening on port ${PORT}`)