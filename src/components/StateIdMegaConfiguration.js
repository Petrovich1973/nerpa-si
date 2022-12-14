import * as React from "react"
import {ContextApp} from "../reducer"
import {Box, Button, FormControlLabel, Switch, TextField} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close'

const thresholdInitial = '50000'
export default function StateIdMegaConfiguration() {

    let navigate = useNavigate()

    const {state} = React.useContext(ContextApp)
    const {relationship} = state
    const [newRelationship, setNewRelationship] = React.useState([])
    const [goal, setGoal] = React.useState(null)
    const [selected, setSelected] = React.useState([])
    const [forcedTransition, setForcedTransition] = React.useState(false)
    const [threshold, setThreshold] = React.useState(thresholdInitial)


    React.useEffect(() => {
        const selectedNew = newRelationship
            .filter((relationship, idx) => relationship.contour !== state.relationship[idx].contour)
            .map(relationship => relationship.idMega)
        setSelected(selectedNew)
        if (!selectedNew.length) setGoal(null)
    }, [newRelationship, state])

    React.useEffect(() => {
        setNewRelationship(relationship)
    }, [relationship])

    const onClickTd = (td) => {

        const newState = newRelationship.map(relationship => {
            if (relationship.idMega !== td.idMega) return ({...relationship})

            return ({
                ...relationship,
                contour: td.contour
            })
        })

        if (goal) {
            if (td.contour === goal || (td.contourOrigin === td.contour)) setNewRelationship(newState)
        } else {
            setNewRelationship(newState)
            setGoal(td.contour)
        }
    }

    const onClickTr = (contour) => {

        const newState = newRelationship.map(relationship => ({
            ...relationship,
            contour
        }))

        setNewRelationship(newState)
        setGoal(contour)
    }

    const onReset = () => {
        setNewRelationship(state.relationship)
        setGoal(null)
        setForcedTransition(false)
        setThreshold(thresholdInitial)
    }

    const onChangeThreshold = (event) => {
        const valueNew = event.target.value
        if (Number.isInteger(+valueNew)) setThreshold(event.target.value)
    }

    const onStartProcessTransition = () => {
        navigate(`${process.env.PUBLIC_URL}/process`)
    }

    return (
        <div>
            <div style={{
                padding: '1.4em',
                margin: '1em 0',
                borderRadius: 4,
                backgroundColor: "white"
            }}>
                <div style={{fontSize: '140%'}}>???????????????????????? ????????????????:</div>
                <Box sx={{display: "flex", m: -1, alignItems: "center"}}>

                    {Boolean(goal) && (
                        <Box sx={{m: 1}}>???????? ????????????????: <strong style={{fontSize: '120%'}}>{goal}</strong></Box>
                    )}

                    {Boolean(selected.length) && (
                        <Box sx={{m: 1, position: "relative"}}>
                            <div>??????????????: <strong>{selected.join(',')}</strong></div>
                            <div style={{position: "absolute", lineHeight: 1}}>
                                <small>
                                    <em>(?????????? {selected.length} ????)</em>
                                </small>
                            </div>
                        </Box>
                    )}

                    <Box sx={{m: 1}}>
                        <FormControlLabel
                            control={<Switch
                                color="primary"
                                checked={forcedTransition}
                                onChange={() => setForcedTransition(!forcedTransition)}/>}
                            label={<div style={{position: "relative"}}>
                                <div>?????????????????????????? ??????????????</div>
                                {forcedTransition && (
                                    <div style={{position: "absolute", lineHeight: 1}}>
                                        <small><em>???????????????????????? ?????????? ??????</em></small>
                                    </div>
                                )}

                            </div>}
                            labelPlacement="start"
                        />
                    </Box>

                    <Box sx={{m: 1}}>
                        <TextField
                            sx={{m: 1}}
                            id="idThreshold"
                            label="threshold"
                            variant="outlined"
                            size={'small'}
                            value={threshold}
                            onChange={onChangeThreshold}/>
                    </Box>
                </Box>
                <div style={{display: "flex", margin: '1em 0', alignItems: "center", justifyContent: "flex-end"}}>
                    <Button
                        component={Link}
                        to={`${process.env.PUBLIC_URL}/dashboard`}
                        variant="contained"
                        // size={'small'}
                        startIcon={<CloseIcon/>}
                        sx={{backgroundColor: '#000000'}}>
                        ???????????????????? ???? ????????????????
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                        disabled={!selected.length && !forcedTransition && threshold === thresholdInitial}
                        variant="outlined"
                        onClick={onReset}>
                        Reset
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="contained" onClick={onStartProcessTransition} disabled={!selected.length}>
                        {selected.length ? '??????????????!' : '???? ?????????????? ????'}
                    </Button>
                </div>
            </div>

            <div style={{textAlign: "center"}}>
                <table className={'tableStateIdMegaToContour configurationMode'}>
                    <tbody>
                    {state.contour
                        // .filter(contour => contour !== 'stop')
                        .map(contour => (
                            <tr key={contour}>
                                <td onClick={() => onClickTr(contour)}>{contour}</td>
                                {state.idMega.map(idMega => {

                                    const contourOrigin = state.relationship
                                        .find(relationship => relationship.idMega === idMega)?.contour

                                    const contourGoal = newRelationship
                                        .find(relationship => relationship.idMega === idMega)?.contour

                                    const isMatch = contourGoal === contour

                                    const isMatchOrigin = contourOrigin === contour

                                    const backgroundColor = (isMatch || isMatchOrigin) ? state.color[contour] : 'white'

                                    const opacity = (isMatchOrigin && !isMatch) ? 0.3 : 1

                                    const boxShadow = (isMatch && !isMatchOrigin) ? 'inset 0 0 0 2px #7e7e7e' : 'none'

                                    return (
                                        <td
                                            onClick={() => onClickTd({idMega, contour, contourOrigin})}
                                            key={idMega}
                                            style={{backgroundColor, opacity, boxShadow}}>

                                            {(isMatch && !isMatchOrigin) && (
                                                <div
                                                    className={`${(contourOrigin === 'main' || contourOrigin === 'stop') &&
                                                    (contourGoal === 'standIn' || contourGoal === 'stop') ? (
                                                        'toSi'
                                                    ) : (
                                                        'toMain'
                                                    )}`}/>
                                            )}

                                            {(isMatchOrigin || isMatch) ? idMega : ''}

                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
