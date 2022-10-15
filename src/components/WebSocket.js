import React, {useState, useRef, useEffect, useCallback} from "react"
import {ContextApp, pathTransition, configInitial} from "../reducer"
import io from 'socket.io-client'
import axios from "axios"
import {Button} from "@mui/material"

const socket = io('http://localhost:7000', {
    transports: ['websocket', 'polling']
})

const WebSocketComponent = () => {
    const {state, dispatch} = React.useContext(ContextApp)
    const [data, setData] = useState(null)

    const {contour, color} = state

    useEffect(() => {

        socket.on('statusMega', (res) => {
            setData(res)
        })

    }, [])

    const onClickChangeStatus = async () => {
        const response = await axios.put('http://localhost:7000/test', {run: !data})
        const result = response.data

    }

    const mappingData = (idMegas) => Object.keys(idMegas).map(key => ({...idMegas[key], name: key}))

    const getColor = (contour, cursor) => {
        if (contour === cursor) return (color[contour])
        return ('white')
    }

    const getValue = (contour, cursor, name) => {
        if (contour === cursor) return name
        return ('')
    }

    const getActivePhase = (phases, row) => {

        if(phases === null) return ('')

        const active = Object.keys(phases).find(key => (phases[key] === 'active')) || null

        if(active && active.indexOf(row) === 0) {
            if (active === "main_stop_back" ||
                active === "main_stop_online" ||
                active === "stop_standIn_back" ||
                active === "stop_standIn_online") return (<div className={'directionToStandIn'}/>)
        }


        return ('')
    }

    return (
        <div>
            <h3>WebSocketComponent</h3>
            <div>
                <Button onClick={onClickChangeStatus}>Change status</Button>
            </div>
            <div>
                <table className={'tableStateIdMegaToContour'}>
                    <tbody>
                    {
                        data &&
                        contour
                            .map(row => (
                                <React.Fragment key={row}>
                                    <tr>
                                        <td>{row}</td>
                                        {mappingData(data).map(idMega => (
                                            <td key={idMega.name}
                                                style={{backgroundColor: getColor(row, idMega.cursor)}}>
                                                {getValue(row, idMega.cursor, idMega.name, idMega.goal, row)}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className={'rowAction'}>
                                        <td/>
                                        {mappingData(data).map(idMega => (
                                            <td key={idMega.name}>
                                                {getActivePhase(idMega.phases, row)}
                                            </td>
                                        ))}
                                    </tr>
                                </React.Fragment>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WebSocketComponent
// mappingData(data)
