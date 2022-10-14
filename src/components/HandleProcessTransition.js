import * as React from "react";
import {ContextApp, pathTransition, configInitial} from "../reducer";
import {CONST_UPDATE_GLOBAL} from "../constants";

const temp = {idMega: '13', pathTransition: '2', from: 'main', to: 'standIn', current: 'main'}

export default function HandleProcessTransition(props) {

    const {state, dispatch} = React.useContext(ContextApp)
    const {relationship, configTransition} = state

    React.useEffect(() => {
        if(configTransition.run) processHandle('start transition')
    }, [configTransition])

    const processHandle = (initialState) => {
        console.log(initialState)
        // const payload = relationship
        // dispatch({type: CONST_UPDATE_GLOBAL, payload })
    }

    return props.children
}