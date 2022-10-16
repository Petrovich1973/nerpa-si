import * as React from "react"
import Typography from "@mui/material/Typography"
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
            <Typography
                align={"center"}
                variant="h2"
                component="h1"
                sx={{lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center"}} gutterBottom>
                <div><IconActionTransition width="48" height="48"/></div>
                &nbsp;
                <div>Процесс перехода</div>
            </Typography>
            <PanelProcess view={view} onChange={onChangeView}/>
            {viewMode[view]}
        </div>
    )
}
