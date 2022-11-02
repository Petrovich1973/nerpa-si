const express = require('express')
const app = express()
const cron = require('node-cron');
const axios = require("axios")
//
//
// const port = 5000
//
// const getRandomInt = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }
//
// const onStart = async () => {
//
//     const fetch = await axios.post('http://localhost:4444/test', {name: getRandomInt(1,100)})
//
//     const result = fetch.data
//
//     console.log(result)
//
//     setTimeout(() => onStart(), 1000, true)
//     // console.log(result)
// }
//
// app.get('/', (req, res) => {
//     onStart()
//     res.send('Hello World!')
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

/////////////////////////////////////////////////


console.log('Start')

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onStart = async () => {

    const fetch = await axios.post('http://localhost:4444/test', {name: getRandomInt(1,100)})

    const result = await fetch.data

    console.log(result)

    await delay(3000).then(() => onStart);
}

onStart()
