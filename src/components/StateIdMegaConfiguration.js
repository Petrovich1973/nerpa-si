import * as React from "react"
import {ContextApp} from "../reducer"
import {Box, Button} from "@mui/material"

export default function StateIdMegaConfiguration() {

    const {state} = React.useContext(ContextApp)
    const [newRelationship, setNewRelationship] = React.useState([])

    const selected = newRelationship
        .filter((relationship, idx) => relationship.contour !== state.relationship[idx].contour)
        .map(relationship => relationship.idMega)

    React.useEffect(() => {
        setNewRelationship(state.relationship)
    }, [state])

    const onClickTd = (td) => {
        const newState = newRelationship.map(relationship => {
            if (relationship.idMega !== td.idMega) return ({...relationship})

            return ({
                ...relationship,
                contour: td.contour
            })
        })

        if(td.contour !== 'stop') setNewRelationship(newState)
    }

    const onClickTr = (contour) => {
        const newState = newRelationship.map(relationship => ({
            ...relationship,
            contour
        }))
        if(contour !== 'stop') setNewRelationship(newState)
    }

    return (
        <div>

            <Button variant="outlined" onClick={() => setNewRelationship(state.relationship)}>Reset</Button>

            {selected && <Box>Выбрано: {selected.join(',')} <small>(всего {selected.length})</small></Box>}

            <table className={'tableStateIdMegaToContour configurationMode'}>
                <tbody>
                {state.contour
                    // .filter(contour => contour !== 'stop')
                    .map(contour => (
                    <tr key={contour}>
                        <td onClick={() => onClickTr(contour)}>{contour}</td>
                        {state.idMega.map(idMega => {

                            const isMatch = newRelationship
                                .find(relationship => relationship.idMega === idMega)?.contour === contour

                            const isMatchOrigin = state.relationship
                                .find(relationship => relationship.idMega === idMega)?.contour === contour

                            const backgroundColor = (isMatch || isMatchOrigin) ? state.color[contour] : 'white'

                            const opacity = (isMatchOrigin && !isMatch) ? 0.3 : 1

                            const boxShadow = (isMatch && !isMatchOrigin) ? 'inset 0 0 3px 0 black' : 'none'

                            return (
                                <td
                                    onClick={() => onClickTd({idMega, contour})}
                                    key={idMega}
                                    style={{backgroundColor, opacity, boxShadow}}>
                                    {(isMatchOrigin || isMatch) ? idMega : ''}
                                </td>
                            )
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
