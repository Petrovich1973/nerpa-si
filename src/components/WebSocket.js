import React, {useState, useRef, useEffect, useCallback} from "react"

import io from 'socket.io-client';
import axios from "axios"
import {Button} from "@mui/material"

const socket = io('http://localhost:7000', {
    transports: ['websocket', 'polling']
});

const WebSocketComponent = () => {
    const [data, setData] = useState(null)

    useEffect(() => {

        socket.on('statusRun', (res) => {
            setData(res.run)
        })

    }, [])

    const onClickChangeStatus = async () => {
        const response = await axios.put('http://localhost:7000/test', {run: !data})
        const result = response.data

    }

    return (
        <div>
            <h3>WebSocketComponent</h3>
            <div>
                {JSON.stringify(data)}
            </div>
            <div>
                <Button onClick={onClickChangeStatus}>Change status</Button>
            </div>
        </div>
    )
}

export default WebSocketComponent
