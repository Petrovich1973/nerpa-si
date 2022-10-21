const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')
// const db = require('./db.json')
const axios = require("axios")

// import lib
const {nodes, getRandomInt} = require("./lib")

const PORT = 7000

const DB_ADDRESS = 'http://localhost'
const DB_PORT = 9000
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

async function updateData() {
    console.log('start updateData')
    const status = await axios.get(`${DB_URL}/status`)
    const {run, jbt} = await status.data

    if (run) {

        const idMega = await axios.get(`${DB_URL}/idMega`)
        const resultIdMega = await idMega.data

        const newState = {...resultIdMega}

        await Object.keys(resultIdMega).forEach(idMega => {
            const {cursor, goal, phases, applications} = resultIdMega[idMega]

            const active = phases ? Object.keys(phases).find(key => (phases[key] === 'active')) : null

            if (active) {


                if (active === 'main_stop_back') {
                    Object.keys(applications).forEach(appKey => {
                        const {main} = applications[appKey]
                        if (main.back !== 0) {
                            const newValueBack = main.back - getRandomInt(1, main.back)
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                applications: {
                                    ...resultIdMega[idMega].applications,
                                    [appKey]: {
                                        ...resultIdMega[idMega].applications[appKey],
                                        main: {
                                            ...resultIdMega[idMega].applications[appKey].main,
                                            back: newValueBack
                                        },
                                        stop: {
                                            ...resultIdMega[idMega].applications[appKey].stop,
                                            back: nodes[appKey].back - newValueBack
                                        }
                                    }
                                }
                            }
                        } else {
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                phases: {
                                    ...resultIdMega[idMega].phases,
                                    ['main_stop_back']: 'complete',
                                    ['main_stop_online']: 'active'
                                }
                            }
                        }
                    })
                }


                if (active === 'main_stop_online') {
                    Object.keys(applications).forEach(appKey => {
                        const {main} = applications[appKey]
                        if (main.online !== 0) {
                            const newValueOnLine = main.online - getRandomInt(1, main.online)
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                applications: {
                                    ...resultIdMega[idMega].applications,
                                    [appKey]: {
                                        ...resultIdMega[idMega].applications[appKey],
                                        main: {
                                            ...resultIdMega[idMega].applications[appKey].main,
                                            online: newValueOnLine
                                        },
                                        stop: {
                                            ...resultIdMega[idMega].applications[appKey].stop,
                                            online: nodes[appKey].online - newValueOnLine
                                        }
                                    }
                                }
                            }
                        } else {
                            const isNext = 'stop_standIn_back' in resultIdMega[idMega].phases &&
                                resultIdMega[idMega].phases['stop_standIn_back'] === 'ready'
                            const nextPhase = isNext ? {'stop_standIn_back': 'active'} : {}
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                phases: {
                                    ...resultIdMega[idMega].phases,
                                    ['main_stop_online']: 'complete',
                                    ...nextPhase
                                }
                            }
                            if(!isNext) {
                                newState[idMega] = {
                                    ...resultIdMega[idMega],
                                    cursor: 'stop',
                                    goal: null,
                                    phases: null
                                }
                            }
                        }
                    })
                }


                if (active === 'stop_standIn_online') {
                    Object.keys(applications).forEach(appKey => {
                        const {stop} = applications[appKey]
                        if (stop.online !== 0) {
                            const newValueOnLine = stop.online - getRandomInt(1, stop.online)
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                applications: {
                                    ...resultIdMega[idMega].applications,
                                    [appKey]: {
                                        ...resultIdMega[idMega].applications[appKey],
                                        stop: {
                                            ...resultIdMega[idMega].applications[appKey].stop,
                                            online: newValueOnLine
                                        },
                                        standIn: {
                                            ...resultIdMega[idMega].applications[appKey].stop,
                                            online: nodes[appKey].online - newValueOnLine
                                        }
                                    }
                                }
                            }
                        } else {
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                phases: {
                                    ...resultIdMega[idMega].phases,
                                    ['stop_standIn_online']: 'complete',
                                    ['stop_standIn_back']: 'active'
                                }
                            }
                        }
                    })
                }


                if (active === 'stop_standIn_back') {
                    Object.keys(applications).forEach(appKey => {
                        const {stop} = applications[appKey]
                        if (stop.back !== 0) {
                            const newValueBack = stop.back - getRandomInt(1, stop.back)
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                applications: {
                                    ...resultIdMega[idMega].applications,
                                    [appKey]: {
                                        ...resultIdMega[idMega].applications[appKey],
                                        stop: {
                                            ...resultIdMega[idMega].applications[appKey].stop,
                                            back: newValueBack
                                        },
                                        standIn: {
                                            ...resultIdMega[idMega].applications[appKey].standIn,
                                            back: nodes[appKey].back - newValueBack
                                        }
                                    }
                                }
                            }
                        } else {
                            const isNext = 'stop_main_online' in resultIdMega[idMega].phases &&
                                resultIdMega[idMega].phases['stop_main_online'] === 'ready'
                            const nextPhase = isNext ? {'stop_main_online': 'active'} : {}
                            newState[idMega] = {
                                ...resultIdMega[idMega],
                                phases: {
                                    ...resultIdMega[idMega].phases,
                                    ['stop_standIn_back']: 'complete',
                                    ...nextPhase
                                }
                            }
                            if(!isNext) {
                                newState[idMega] = {
                                    ...resultIdMega[idMega],
                                    cursor: 'standIn',
                                    goal: null,
                                    phases: null
                                }
                            }
                        }
                    })
                }









            }
            // если не выполнены условия, то пропускаем
        })

        // await axios.put(`${DB_URL}/idMega`, newState)

        // test update data status
        const jbtCount = await getRandomInt(100, 1000000)
        const r = await axios.put(`${DB_URL}/status`, {
            run: true,
            jbt: jbtCount
        })
        const rR  = await r.data.jbt
        console.log('jbt = ', rR)
    }

    setTimeout(() => {
        updateData()
    }, 5000)

}
// void updateData()

async function sendData(socket) {

    const report = await axios.get(`${DB_URL}/idMega`)
    await console.log('response from db', new Date())
    const result = await report.data

    socket.emit('statusMega', result)
    setTimeout(() => {
        sendData(socket)
    }, 3000)

}
