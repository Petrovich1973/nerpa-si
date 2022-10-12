import Typography from "@mui/material/Typography"
import PanelMonitoring from "../components/PanelMonitoring"
import * as React from "react"
// import {ContextApp} from "../reducer"
// import {CONST_UPDATE_GLOBAL} from "../constants"
import StateIdMegaMonitoring from "../components/StateIdMegaMonitoring"
import StateIdMegaConfiguration from "../components/StateIdMegaConfiguration"

export default function PageDashboard() {

    // const {state, dispatch} = React.useContext(ContextApp);

    return (
        <div>
            <Typography align={"center"} variant="h2" component="h1" sx={{lineHeight: 1}} gutterBottom>
                Мониторинг режима состояния приложений
            </Typography>
            <PanelMonitoring/>
            <StateIdMegaMonitoring/>
            <StateIdMegaConfiguration/>
        </div>
    )
}
