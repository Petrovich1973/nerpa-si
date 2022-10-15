const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db.json')
const axios = require("axios")

const PORT = 7000

const DB_ADDRESS = 'http://localhost'
const DB_PORT = 8000
const DB_URL = `${DB_ADDRESS}:${DB_PORT}`

const app = express()
app.use(cors({origin: '*'}))
app.use(bodyParser.json())

app.put('/test', (req, res) => {
    console.log(req.body)
    res.send({test: 'OK'})
})

const server = app.listen(PORT, () => {
    console.log('Started in port ' + PORT)
})

const io = socket(server)

io.sockets.on('connection', (socket) => {
    console.log(`new connection id: ${socket.id}`)
    void sendData(socket)
})

async function sendData(socket) {

    const report = await axios.get(`${DB_URL}/status`)
    const result = await report.data

    // socket.emit('data1', Array.from({length: 8}, () => Math.floor(Math.random() * 590) + 10))
    socket.emit('statusRun', {...result})

    setTimeout(() => {
        sendData(socket)
    }, 1000)

}
