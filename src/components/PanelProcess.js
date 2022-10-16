import * as React from "react"
import {ViewModule, ViewList} from '@mui/icons-material'
import {Tab, Tabs} from "@mui/material"
import IconQueue from "../icons/IconQueue"


export default function PanelProcess({
                                         view = 0, onChange = () => {
    }
                                     }) {
    return (
        <div className={'panelMonitoring'}>
            <Tabs value={view} onChange={onChange} aria-label="tabs">
                <Tab icon={<ViewModule/>} aria-label="simple" tabIndex={0}/>
                <Tab icon={<ViewList/>} aria-label="extended" tabIndex={1}/>
            </Tabs>
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
