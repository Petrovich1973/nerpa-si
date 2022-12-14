import React, {useState, useEffect} from "react"
import {ContextApp} from "../reducer"
import io from 'socket.io-client'
import {Box, CircularProgress} from "@mui/material"

const socket = io('http://localhost:7000', {
    transports: ['websocket', 'polling']
})

export default function StateProcessSimple() {
    const {state} = React.useContext(ContextApp)
    const [data, setData] = useState(null)

    const {contour, color} = state

    useEffect(() => {

        socket.on('statusMega', (res) => {
            setData(res)
        })

    }, [])

    const mappingData = (idMegas) => Object.keys(idMegas).map(key => ({...idMegas[key], name: key}))

    const getColor = (contour, cursor) => {
        if (contour === cursor) return (color[contour])
        return ('white')
    }

    const getValue = (contour, cursor, name) => {
        if (contour === cursor) return name
        return ('')
    }

    const getActivePhase = (phases, row, direction) => {

        if (phases === null) return ('')

        const active = Object.keys(phases).find(key => (phases[key] === 'active')) || null

        if (active && active.indexOf(row) === 0) {
            if (direction === 'bottom' && (active === "main_stop_back" ||
                active === "main_stop_online" ||
                active === "stop_standIn_back" ||
                active === "stop_standIn_online")) return (<div className={'directionToStandIn'}/>)
            if (direction === 'top' && (active === "standIn_stop_back" ||
                active === "standIn_stop_online" ||
                active === "stop_main_back" ||
                active === "stop_main_online")) return (<div className={'directionToMain'}/>)
            return ('')
        }

        return ('')
    }

    return (
        <div style={{textAlign: "center"}}>
            {data ? (
                <table className={'tableStateIdMegaToContour'}>
                    <tbody>
                    {contour
                        .map(row => (
                            <React.Fragment key={row}>
                                <tr className={'rowAction'}>
                                    <td/>
                                    {mappingData(data).map(idMega => (
                                        <td key={idMega.name}>
                                            {getActivePhase(idMega.phases, row, 'top')}
                                        </td>
                                    ))}
                                </tr>
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
                                            {getActivePhase(idMega.phases, row, 'bottom')}
                                        </td>
                                    ))}
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            ) : (
                <Box sx={{display: 'flex', justifyContent: "center"}}>
                    <CircularProgress/>
                </Box>
            )}
        </div>
    )
}
