import * as React from "react"
import {ContextApp} from "../reducer"

export default function StateIdMegaMonitoring() {

    const {state} = React.useContext(ContextApp)

    return (
        <div>
            <table className={'tableStateIdMegaToContour'}>
                <tbody>
                {state.contour.map(contour => (
                    <tr key={contour}>
                        <td>{contour}</td>
                        {state.idMega.map(idMega => {
                            const isMatch = state.relationship.find(relationship => relationship.idMega === idMega).contour === contour
                            const backgroundColor = isMatch ? state.color[contour] : 'white'
                            return (
                                <td
                                    key={idMega}
                                    style={{backgroundColor}}>{isMatch && idMega}</td>
                            )
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
