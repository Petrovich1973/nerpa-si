import React, {useState, useEffect} from "react"
import {Box, CircularProgress} from "@mui/material"
import axios from "axios"
import ProcessTransitionItem from "./ProcessTransitionItem"

const host = 'http://localhost:4444'
const endpoints = ['/steps', '/states']

export default function StateProcessSimple() {
    const [steps, setSteps] = useState(null)
    const [states, setStates] = useState(null)
    const [waiting, setWaiting] = useState(false)

    useEffect(() => {

        (async () => {
            setWaiting(true)
            const result = await axios.all([...endpoints].map((endpoint) => axios.get(host + endpoint)))
            const response = [...result]
            await setSteps(response[0].data)
            await setStates(response[1].data)
            setWaiting(false)
        })()

        return () => {
            // abort request
        }

    }, [])

    if (waiting) return (
        <Box sx={{display: 'flex', justifyContent: "center"}}>
            получение данных <CircularProgress/>
        </Box>
    )

    return (
        <div style={{textAlign: "center"}}>
            {Boolean(steps && states && Object.keys(steps).length && states.length) ? (
                <div className={'processTransitionContainer'}>
                    {states
                        .sort((a, b) => (a.tb - b.tb))
                        // .filter(tb => tb.tb === 16 || tb.tb === 40 || tb.tb === 44 || tb.tb === 54)
                        .map(element => {
                            const {tb = 3000} = element
                            return (
                                <ProcessTransitionItem
                                    key={tb}
                                    width={`calc(100% / ${states.length})`}
                                    {...element}
                                    steps={steps[tb]}/>
                            )
                        })}
                </div>
            ) : (
                <Box sx={{display: 'flex', justifyContent: "center"}}>
                    <span>нет данных</span>
                </Box>
            )}
        </div>
    )
}
