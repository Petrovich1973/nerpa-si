import * as React from "react"
import IconActionTransition from "../icons/IconActionTransition"
import StateProcessExtended from "../components/StateProcessExtended"
import PanelProcess from "../components/PanelProcess"
import StateProcessSimple from "../components/StateProcessSimple"



export default function PageTransitionProcess() {

    const [view, setView] = React.useState(0)

    const viewMode = [<StateProcessSimple/>, <StateProcessExtended/>]

    const onChangeView = (event, newValue) => setView(newValue)

    return (
        <div>
            <div
                style={{
                    fontSize: '3.75rem',
                    letterSpacing: '-0.00833em',
                    marginBottom: '0.35em',
                    lineHeight: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <div><IconActionTransition width="48" height="48"/></div>
                &nbsp;
                <div>Процесс перехода</div>
            </div>
            <PanelProcess view={view} onChange={onChangeView}/>
            {viewMode[view]}
        </div>
    )
}
