import * as React from "react"
import Typography from "@mui/material/Typography"
import PanelMonitoring from "../components/PanelMonitoring"
import StateIdMegaMonitoring from "../components/StateIdMegaMonitoring"

export default function PageDashboard() {

    return (
        <div>
            <Typography align={"center"} variant="h2" component="h1" sx={{lineHeight: 1}} gutterBottom>
                Мониторинг состояния
            </Typography>
            <PanelMonitoring/>
            <StateIdMegaMonitoring/>
        </div>
    )
}
