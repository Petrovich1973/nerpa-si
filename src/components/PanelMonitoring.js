import * as React from "react"
import IconActionTransition from "../icons/IconActionTransition"
import {Button} from "@mui/material"
import IconQueue from "../icons/IconQueue"
import { Link } from "react-router-dom"


const PanelMonitoring = () => {
    return (
        <div className={'panelMonitoring'}>
            <Button
                component={Link}
                to="/create"
                variant="contained"
                size="medium"
                startIcon={<IconActionTransition width="24" height="24"/>}
                sx={{backgroundColor: '#000000'}}>
                создать задачу перехода
            </Button>
            <div className={'panelMonitoring_queueBox'}>
                <span>очередь ЖБТ по всем ТБ</span>
                <div className={'panelMonitoring_queueBox_iconBox'}>
                    <IconQueue width="24" height="24"/>
                </div>
                <strong>32 000 000 000</strong>
            </div>
        </div>
    )
}

export default PanelMonitoring
