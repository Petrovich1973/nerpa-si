import React from "react"
import Step from "./steps/Step"
import IconArrow from "../icons/iconArrow"

export default function ProcessTransitionItem(props) {
    const {
        width = 110,
        tb = null,
        state = 'SOME',
        inTransition = false,
        targetState = null,
        steps = []
    } = props || {}

    const onSort = (a, b) => {
        if(targetState === 'RESERVE') return b.index > a.index ? -1 : 1
        return a.index > b.index ? -1 : 1
    }


    return (
        <div className={'processTransitionItem'} style={{width}}>
            <div className={'processTransitionItem_nameTb'}>{tb}</div>
            <div className={'processTransitionItem_statusesGroups'}>
                <div className={'contour_name NORMAL ' + ((state === 'NORMAL') && 'active')}>Main</div>
                {inTransition ? (targetState === 'NORMAL' ? (
                    <div className={'btn-push'}>
                        <div>
                            <IconArrow fill={'#565656'} width={'100%'} height={'100%'}/>
                        </div>
                        <div className={'btn-push_text'}>PUSH</div>
                    </div>
                ) : (
                    <div>
                        <IconArrow width={'100%'} height={'100%'} fill={'#D9D9D9'} opacity={'0.2'}/>
                    </div>
                )) : (
                    <div>
                        <IconArrow width={'100%'} height={'100%'} fill={'#D9D9D9'} opacity={'0'}/>
                    </div>
                )}
                {steps
                    .sort(onSort)
                    .map(step => (
                        <Step
                            key={step.index}
                            currentState={state}
                            targetState={targetState}
                            {...step}/>
                        ))}
                {inTransition ? (targetState === 'RESERVE' ? (
                    <div className={'btn-push'}>
                        <div style={{transform: 'scale(1, -1)'}}>
                            <IconArrow fill={'#565656'} width={'100%'} height={'100%'}/>
                        </div>
                        <div className={'btn-push_text'}>PUSH</div>
                    </div>
                ) : (
                    <div style={{transform: 'scale(1, -1)'}}>
                        <IconArrow width={'100%'} height={'100%'} fill={'#D9D9D9'} opacity={'0.2'}/>
                    </div>
                )) : (
                    <div>
                        <IconArrow width={'100%'} height={'100%'} fill={'#D9D9D9'} opacity={'0'}/>
                    </div>
                )}
                <div className={'contour_name RESERVE ' + ((state === 'RESERVE') && 'active')}>StandIn</div>
            </div>
        </div>
    )
}
