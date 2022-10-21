import * as React from "react"
import IconSwitchOn from "../../icons/IconSwitchOn"
import IconSwitchOff from "../../icons/IconSwitchOff"
import IconProcess from "../../icons/IconProcess"

const stepsState = ['NEW', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED']

export default function Step({
                                 stepId = 'MAIN_STOP_ONLINE_PROCESSES',
                                 title = 'Остановка online процессов на MAIN',
                                 state = 'NEW',
                                 currentState = '',
                                 targetState = '',
                                 currentValue = 3500,
                                 targetValue = 0,
                                 threshold = 500,
                                 onClick = () => console.log('onClick')
                             }) {

    const createStep = () => {

        switch (stepId) {
            case 'MAIN_STOP_BACKGROUND_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>BGP OFF</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOn/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOff/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'MAIN_START_BACKGROUND_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>BGP ON</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOff/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOn/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'MAIN_STOP_ONLINE_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>ONLINE OFF</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOn/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOff/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'MAIN_START_ONLINE_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>ONLINE ON</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOff/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOn/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'START_SI_ONLINE_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>ONLINE ON</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOff/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOn/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'STOP_SI_ONLINE_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>ONLINE OFF</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOn/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOff/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'START_SI_BACKGROUND_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>BGP ON</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOff/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOn/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'STOP_SI_BACKGROUND_PROCESSES':
                return (
                    <>
                        <div className={'step_value'}>{currentValue}</div>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>BGP OFF</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                                {state === 'NEW' && (
                                    <IconSwitchOn/>
                                )}
                                {(state === 'COMPLETED' || state === 'SKIPPED') && (
                                    <IconSwitchOff/>
                                )}
                            </div>
                        </div>
                        <div className={'step_value'}>{targetValue}</div>
                    </>
                )
            case 'WAITING_JRN_QUEUE_LIMIT':
                return (
                    <>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>ЖБТ <strong>{targetValue}</strong> &#10094; {threshold}
                            </div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                            </div>
                        </div>
                    </>
                )
            case 'WAITING_JRN_QUEUE_EMPTY':
                return (
                    <>
                        <div className={'step_title'}>
                            <div className={'step_title_top'}>ЖБТ <strong>{targetValue}</strong> = 0</div>
                            <div className={'step_title_bottom'}>
                                {state === 'IN_PROGRESS' && <IconProcess/>}
                            </div>
                        </div>
                    </>
                )
            default:
                return (
                    <div className={'step_title'}>
                        <div className={'step_title_top'}>неизвестный шаг</div>
                    </div>
                )
        }

    }

    return (
        <div className={'step ' + state + '_' + stepId} onClick={() => onClick(stepId)}>
            {createStep()}
        </div>
    )
}
