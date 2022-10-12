import * as React from "react"
import Typography from "@mui/material/Typography"
import IconActionTransition from "../icons/IconActionTransition"
import StateIdMegaProcess from "../components/StateIdMegaProcess"
import PanelProcess from "../components/PanelProcess"

export default function PageTransitionProcess() {

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
            <PanelProcess/>
            <StateIdMegaProcess/>
        </div>
    )
}
