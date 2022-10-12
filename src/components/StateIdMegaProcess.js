import * as React from "react"
import {ContextApp} from "../reducer"

export default function StateIdMegaProcess() {

    const {state} = React.useContext(ContextApp)

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
                <tr className={'rowIdMegas'}>
                    <th style={{backgroundColor: "transparent"}}/>
                    {state.idMega.map(idMega => (<th key={idMega}>{idMega}</th>))}
                    <th style={{backgroundColor: "transparent"}}/>
                    {state.idMega.map(idMega => (<th key={idMega}>{idMega}</th>))}
                    <th style={{backgroundColor: "transparent"}}/>
                    {state.idMega.map(idMega => (<th key={idMega}>{idMega}</th>))}
                </tr>
                </thead>
                {state.applications.map((application, idx) => (
                    <>
                        <tbody>
                        <tr>
                            <td colSpan="11" style={{backgroundColor: "transparent"}} height={10}/>
                        </tr>
                        </tbody>
                        <tbody key={idx}>
                        <tr>
                            <td rowSpan="2" style={{verticalAlign: "middle", padding: '0 10px', textAlign: "left"}}>{application.name}</td>
                            <td style={{textAlign: "left", padding: '2px'}}>фоновые</td>
                            <td style={{backgroundColor: "transparent"}}/>
                            {application.process.backgroundProcess.map((process, processIdx) => (
                                <td key={processIdx} style={{padding: '2px'}}>{process.nodeCount}</td>
                            ))}
                            <td style={{backgroundColor: "transparent"}}/>
                            {application.process.backgroundProcess.map((process, processIdx) => (
                                <td key={processIdx} style={{padding: '2px'}}>{process.nodeCount}</td>
                            ))}
                            <td style={{backgroundColor: "transparent"}}/>
                            {application.process.backgroundProcess.map((process, processIdx) => (
                                <td key={processIdx} style={{padding: '2px'}}>{process.nodeCount}</td>
                            ))}
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", padding: '2px'}}>онлайн</td>
                            <td style={{backgroundColor: "transparent"}}/>
                            {application.process.onlineProcess.map((process, processIdx) => (
                                <td key={processIdx} style={{padding: '2px'}}>{process.nodeCount}</td>
                            ))}
                            <td style={{backgroundColor: "transparent"}}/>
                            {application.process.onlineProcess.map((process, processIdx) => (
                                <td key={processIdx} style={{padding: '2px'}}>{process.nodeCount}</td>
                            ))}
                            <td style={{backgroundColor: "transparent"}}/>
                            {application.process.onlineProcess.map((process, processIdx) => (
                                <td key={processIdx} style={{padding: '2px'}}>{process.nodeCount}</td>
                            ))}
                        </tr>
                        </tbody>
                    </>
                ))}
            </table>
        </div>
    )
}
