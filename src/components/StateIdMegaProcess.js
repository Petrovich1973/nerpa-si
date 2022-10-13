import * as React from "react"
import {ContextApp} from "../reducer"
import {CONST_UPDATE_GLOBAL} from "../constants"

const seconds = 1

function delay(millis) {
    let cancelTimer = () => {}
    const promise = new Promise((resolve, reject) => {
        const timeoutID = setTimeout(() => {
            resolve('done')
        }, millis)
        cancelTimer = () => {
            clearTimeout(timeoutID)
        }
    })
    return [promise, cancelTimer]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function StateIdMegaProcess() {

    const {state, dispatch} = React.useContext(ContextApp)
    const [promise, cancelTimer] = delay(seconds * 1000)

    // React.useEffect(() => {
    //
    // }, [state])

    function fetchToDos() {
        const applicationsNew = state.applications
            .map(application => ({
                ...application,
                process: {
                    ...application.process,
                    backgroundProcess: {
                        ...application.process.backgroundProcess,
                        main: application.process.backgroundProcess.main.map(m => {
                            const minus = m.nodeCount > 4 ? getRandomInt(1,5) : m.nodeCount
                            return ({
                                ...m,
                                nodeCount: m.nodeCount - minus
                            })
                        })
                    }
                }
            }))
        dispatch({type: CONST_UPDATE_GLOBAL, payload: {applications: applicationsNew}})
    }

    React.useEffect(() => {
        const abortController = new AbortController()

        async function goFetch() {
            await promise
            await fetchToDos()
        }

        goFetch()

        return () => {
            console.log('unMount')
            cancelTimer()
            abortController.abort()
        }
    }, [state])

    return (
        <div>
            <table className={'tableProcessIdMegaToContour'}>
                <thead>
                <tr>
                    <th colSpan="2" rowSpan="2"/>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th colSpan="11">Main</th>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th colSpan="11">Stop</th>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th colSpan="11">StandIn</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "transparent"}}/>
                    {state.idMega.map((idMega) => (
                        <th className={'dark'} key={idMega}>{idMega}</th>
                    ))}
                    <th style={{backgroundColor: "transparent"}}/>
                    {state.idMega.map((idMega) => (
                        <th className={'dark'} key={idMega}>{idMega}</th>
                    ))}
                    <th style={{backgroundColor: "transparent"}}/>
                    {state.idMega.map((idMega) => (
                        <th className={'dark'} key={idMega}>{idMega}</th>
                    ))}
                </tr>
                </thead>

                {state.applications.map((application, applicationsIdx) => (
                    <React.Fragment key={applicationsIdx}>
                        <tbody>
                        <tr>
                            <td colSpan="38" style={{backgroundColor: "transparent"}} height={10}/>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td rowSpan="2" className={'dark'}><strong>{application.name}</strong></td>
                            <td className={'dark'}>фоновые</td>
                            {Object.keys(application.process.backgroundProcess).map((key, idx) => (
                                <React.Fragment key={key}>
                                    <td style={{backgroundColor: "transparent"}}/>
                                    {application.process.backgroundProcess[key]
                                        .map(((tb, tbIdx) => (
                                            <td key={tbIdx}>{(tb.nodeCount !== 0) && tb.nodeCount}</td>
                                        )))}
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className={'dark'}>онлайн</td>
                            {Object.keys(application.process.onlineProcess)
                                .map((key, idx) => (
                                    <React.Fragment key={key}>
                                        <td style={{backgroundColor: "transparent"}}/>
                                        {application.process.onlineProcess[key].map(((tb, tbIdx) => (
                                            <td key={tbIdx}>{(tb.nodeCount !== 0) && tb.nodeCount}</td>
                                        )))}
                                    </React.Fragment>
                                ))}
                        </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </div>
    )
}
