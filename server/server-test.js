const http = require('http');
const axios = require("axios")

const hostname = '127.0.0.1';
const port = 3000;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const server = http.createServer(async (req, res) => {

    let response = {response: "OK"};

    await (async function() {

        const resultFind = await axios.get(`http://localhost:9999/states/0`)
        // console.log(resultFind.data)
        await axios.put(`http://localhost:9999/states/0`, {...resultFind.data, jrnQueueLength: getRandomInt(0, 1000000)})

        const result = await axios.get(`http://localhost:9999/states?tb=13`)

        if(result) response = result.data

    })()

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
