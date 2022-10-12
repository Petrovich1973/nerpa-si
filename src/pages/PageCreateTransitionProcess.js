import * as React from "react"
import Typography from "@mui/material/Typography"
import StateIdMegaConfiguration from "../components/StateIdMegaConfiguration"

export default function PageCreateTransitionProcess() {

    return (
        <div>
            <Typography align={"center"} variant="h2" component="h1" sx={{lineHeight: 1}} gutterBottom>
                Создание задачи перехода
            </Typography>
            <StateIdMegaConfiguration/>
        </div>
    )
}
