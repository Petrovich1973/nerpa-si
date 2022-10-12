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
                    <th colSpan="3">Main</th>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th colSpan="3">Stop</th>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th colSpan="3">StandIn</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th>13</th>
                    <th>16</th>
                    <th>38</th>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th>13</th>
                    <th>16</th>
                    <th>38</th>
                    <th style={{backgroundColor: "transparent"}}/>
                    <th>13</th>
                    <th>16</th>
                    <th>38</th>
                </tr>
                </thead>
                <tbody><tr><td colSpan="11" style={{backgroundColor: "transparent"}} height={10}/></tr></tbody>
                <tbody>
                <tr>
                    <td rowSpan="2">FORD</td>
                    <td>фоновые</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td>125</td>
                    <td>125</td>
                    <td>125</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr>
                    <td>онлайн</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td>125</td>
                    <td>125</td>
                    <td>125</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                </tbody>
                <tbody><tr><td colSpan="11" style={{backgroundColor: "transparent"}} height={10}/></tr></tbody>
                <tbody>
                <tr>
                    <td rowSpan="2">MKS</td>
                    <td>фоновые</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td>46</td>
                    <td>46</td>
                    <td>46</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr>
                    <td>онлайн</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td>46</td>
                    <td>46</td>
                    <td>46</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                </tbody>
                <tbody><tr><td colSpan="11" style={{backgroundColor: "transparent"}} height={10}/></tr></tbody>
                <tbody>
                <tr>
                    <td rowSpan="2">COD</td>
                    <td>фоновые</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td>75</td>
                    <td>75</td>
                    <td>75</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr>
                    <td>онлайн</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td>75</td>
                    <td>75</td>
                    <td>75</td>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                    <td style={{backgroundColor: "transparent"}}/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
