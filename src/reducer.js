import {createContext} from "react"
import {CONST_UPDATE_GLOBAL} from "./constants"
import Moment from "moment"

Moment.locale('ru')
export const ContextApp = createContext(null)

export const initialState = {
    idMega: ['13', '16', '18', '38', '40', '42', '44', '52', '54', '55', '70'],
    contour: ['main', 'stop', 'standIn'],
    relationship: [
        {idMega: '13', contour: 'main'},
        {idMega: '16', contour: 'main'},
        {idMega: '18', contour: 'main'},
        {idMega: '38', contour: 'stop'},
        {idMega: '40', contour: 'main'},
        {idMega: '42', contour: 'standIn'},
        {idMega: '44', contour: 'main'},
        {idMega: '52', contour: 'standIn'},
        {idMega: '54', contour: 'main'},
        {idMega: '55', contour: 'main'},
        {idMega: '70', contour: 'main'},
    ],
    applications: [
        {
            name: 'FORT',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 125},
                    {idMega: '16', nodeCount: 125},
                    {idMega: '18', nodeCount: 125},
                    {idMega: '38', nodeCount: 125},
                    {idMega: '40', nodeCount: 125},
                    {idMega: '42', nodeCount: 125},
                    {idMega: '44', nodeCount: 125},
                    {idMega: '52', nodeCount: 125},
                    {idMega: '54', nodeCount: 125},
                    {idMega: '55', nodeCount: 125},
                    {idMega: '70', nodeCount: 125},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 125},
                    {idMega: '16', nodeCount: 125},
                    {idMega: '18', nodeCount: 125},
                    {idMega: '38', nodeCount: 125},
                    {idMega: '40', nodeCount: 125},
                    {idMega: '42', nodeCount: 125},
                    {idMega: '44', nodeCount: 125},
                    {idMega: '52', nodeCount: 125},
                    {idMega: '54', nodeCount: 125},
                    {idMega: '55', nodeCount: 125},
                    {idMega: '70', nodeCount: 125},
                ]
            }
        },
        {
            name: 'MKS',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 111},
                    {idMega: '16', nodeCount: 111},
                    {idMega: '18', nodeCount: 111},
                    {idMega: '38', nodeCount: 111},
                    {idMega: '40', nodeCount: 111},
                    {idMega: '42', nodeCount: 111},
                    {idMega: '44', nodeCount: 111},
                    {idMega: '52', nodeCount: 111},
                    {idMega: '54', nodeCount: 111},
                    {idMega: '55', nodeCount: 111},
                    {idMega: '70', nodeCount: 111},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 111},
                    {idMega: '16', nodeCount: 111},
                    {idMega: '18', nodeCount: 111},
                    {idMega: '38', nodeCount: 111},
                    {idMega: '40', nodeCount: 111},
                    {idMega: '42', nodeCount: 111},
                    {idMega: '44', nodeCount: 111},
                    {idMega: '52', nodeCount: 111},
                    {idMega: '54', nodeCount: 111},
                    {idMega: '55', nodeCount: 111},
                    {idMega: '70', nodeCount: 111},
                ]
            }
        },
        {
            name: 'COD99',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 45},
                    {idMega: '16', nodeCount: 45},
                    {idMega: '18', nodeCount: 45},
                    {idMega: '38', nodeCount: 45},
                    {idMega: '40', nodeCount: 45},
                    {idMega: '42', nodeCount: 45},
                    {idMega: '44', nodeCount: 45},
                    {idMega: '52', nodeCount: 45},
                    {idMega: '54', nodeCount: 45},
                    {idMega: '55', nodeCount: 45},
                    {idMega: '70', nodeCount: 45},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 45},
                    {idMega: '16', nodeCount: 45},
                    {idMega: '18', nodeCount: 45},
                    {idMega: '38', nodeCount: 45},
                    {idMega: '40', nodeCount: 45},
                    {idMega: '42', nodeCount: 45},
                    {idMega: '44', nodeCount: 45},
                    {idMega: '52', nodeCount: 45},
                    {idMega: '54', nodeCount: 45},
                    {idMega: '55', nodeCount: 45},
                    {idMega: '70', nodeCount: 45},
                ]
            }
        },
        {
            name: 'CODbo',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 72},
                    {idMega: '16', nodeCount: 72},
                    {idMega: '18', nodeCount: 72},
                    {idMega: '38', nodeCount: 72},
                    {idMega: '40', nodeCount: 72},
                    {idMega: '42', nodeCount: 72},
                    {idMega: '44', nodeCount: 72},
                    {idMega: '52', nodeCount: 72},
                    {idMega: '54', nodeCount: 72},
                    {idMega: '55', nodeCount: 72},
                    {idMega: '70', nodeCount: 72},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 72},
                    {idMega: '16', nodeCount: 72},
                    {idMega: '18', nodeCount: 72},
                    {idMega: '38', nodeCount: 72},
                    {idMega: '40', nodeCount: 72},
                    {idMega: '42', nodeCount: 72},
                    {idMega: '44', nodeCount: 72},
                    {idMega: '52', nodeCount: 72},
                    {idMega: '54', nodeCount: 72},
                    {idMega: '55', nodeCount: 72},
                    {idMega: '70', nodeCount: 72},
                ]
            }
        },
        {
            name: 'CODonline',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 84},
                    {idMega: '16', nodeCount: 84},
                    {idMega: '18', nodeCount: 84},
                    {idMega: '38', nodeCount: 84},
                    {idMega: '40', nodeCount: 84},
                    {idMega: '42', nodeCount: 84},
                    {idMega: '44', nodeCount: 84},
                    {idMega: '52', nodeCount: 84},
                    {idMega: '54', nodeCount: 84},
                    {idMega: '55', nodeCount: 84},
                    {idMega: '70', nodeCount: 84},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 84},
                    {idMega: '16', nodeCount: 84},
                    {idMega: '18', nodeCount: 84},
                    {idMega: '38', nodeCount: 84},
                    {idMega: '40', nodeCount: 84},
                    {idMega: '42', nodeCount: 84},
                    {idMega: '44', nodeCount: 84},
                    {idMega: '52', nodeCount: 84},
                    {idMega: '54', nodeCount: 84},
                    {idMega: '55', nodeCount: 84},
                    {idMega: '70', nodeCount: 84},
                ]
            }
        },
        {
            name: 'LESkov',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 37},
                    {idMega: '16', nodeCount: 37},
                    {idMega: '18', nodeCount: 37},
                    {idMega: '38', nodeCount: 37},
                    {idMega: '40', nodeCount: 37},
                    {idMega: '42', nodeCount: 37},
                    {idMega: '44', nodeCount: 37},
                    {idMega: '52', nodeCount: 37},
                    {idMega: '54', nodeCount: 37},
                    {idMega: '55', nodeCount: 37},
                    {idMega: '70', nodeCount: 37},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 37},
                    {idMega: '16', nodeCount: 37},
                    {idMega: '18', nodeCount: 37},
                    {idMega: '38', nodeCount: 37},
                    {idMega: '40', nodeCount: 37},
                    {idMega: '42', nodeCount: 37},
                    {idMega: '44', nodeCount: 37},
                    {idMega: '52', nodeCount: 37},
                    {idMega: '54', nodeCount: 37},
                    {idMega: '55', nodeCount: 37},
                    {idMega: '70', nodeCount: 37},
                ]
            }
        },
        {
            name: 'SHRAMko',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 29},
                    {idMega: '16', nodeCount: 29},
                    {idMega: '18', nodeCount: 29},
                    {idMega: '38', nodeCount: 29},
                    {idMega: '40', nodeCount: 29},
                    {idMega: '42', nodeCount: 29},
                    {idMega: '44', nodeCount: 29},
                    {idMega: '52', nodeCount: 29},
                    {idMega: '54', nodeCount: 29},
                    {idMega: '55', nodeCount: 29},
                    {idMega: '70', nodeCount: 29},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 29},
                    {idMega: '16', nodeCount: 29},
                    {idMega: '18', nodeCount: 29},
                    {idMega: '38', nodeCount: 29},
                    {idMega: '40', nodeCount: 29},
                    {idMega: '42', nodeCount: 29},
                    {idMega: '44', nodeCount: 29},
                    {idMega: '52', nodeCount: 29},
                    {idMega: '54', nodeCount: 29},
                    {idMega: '55', nodeCount: 29},
                    {idMega: '70', nodeCount: 29},
                ]
            }
        },
        {
            name: 'POPoff',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 45},
                    {idMega: '16', nodeCount: 45},
                    {idMega: '18', nodeCount: 45},
                    {idMega: '38', nodeCount: 45},
                    {idMega: '40', nodeCount: 45},
                    {idMega: '42', nodeCount: 45},
                    {idMega: '44', nodeCount: 45},
                    {idMega: '52', nodeCount: 45},
                    {idMega: '54', nodeCount: 45},
                    {idMega: '55', nodeCount: 45},
                    {idMega: '70', nodeCount: 45},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 45},
                    {idMega: '16', nodeCount: 45},
                    {idMega: '18', nodeCount: 45},
                    {idMega: '38', nodeCount: 45},
                    {idMega: '40', nodeCount: 45},
                    {idMega: '42', nodeCount: 45},
                    {idMega: '44', nodeCount: 45},
                    {idMega: '52', nodeCount: 45},
                    {idMega: '54', nodeCount: 45},
                    {idMega: '55', nodeCount: 45},
                    {idMega: '70', nodeCount: 45},
                ]
            }
        },
        {
            name: 'GLUshen',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 15},
                    {idMega: '16', nodeCount: 15},
                    {idMega: '18', nodeCount: 15},
                    {idMega: '38', nodeCount: 15},
                    {idMega: '40', nodeCount: 15},
                    {idMega: '42', nodeCount: 15},
                    {idMega: '44', nodeCount: 15},
                    {idMega: '52', nodeCount: 15},
                    {idMega: '54', nodeCount: 15},
                    {idMega: '55', nodeCount: 15},
                    {idMega: '70', nodeCount: 15},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 15},
                    {idMega: '16', nodeCount: 15},
                    {idMega: '18', nodeCount: 15},
                    {idMega: '38', nodeCount: 15},
                    {idMega: '40', nodeCount: 15},
                    {idMega: '42', nodeCount: 15},
                    {idMega: '44', nodeCount: 15},
                    {idMega: '52', nodeCount: 15},
                    {idMega: '54', nodeCount: 15},
                    {idMega: '55', nodeCount: 15},
                    {idMega: '70', nodeCount: 15},
                ]
            }
        },
        {
            name: 'STRebuk',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 63},
                    {idMega: '16', nodeCount: 63},
                    {idMega: '18', nodeCount: 63},
                    {idMega: '38', nodeCount: 63},
                    {idMega: '40', nodeCount: 63},
                    {idMega: '42', nodeCount: 63},
                    {idMega: '44', nodeCount: 63},
                    {idMega: '52', nodeCount: 63},
                    {idMega: '54', nodeCount: 63},
                    {idMega: '55', nodeCount: 63},
                    {idMega: '70', nodeCount: 63},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 63},
                    {idMega: '16', nodeCount: 63},
                    {idMega: '18', nodeCount: 63},
                    {idMega: '38', nodeCount: 63},
                    {idMega: '40', nodeCount: 63},
                    {idMega: '42', nodeCount: 63},
                    {idMega: '44', nodeCount: 63},
                    {idMega: '52', nodeCount: 63},
                    {idMega: '54', nodeCount: 63},
                    {idMega: '55', nodeCount: 63},
                    {idMega: '70', nodeCount: 63},
                ]
            }
        },
        {
            name: 'AllimKing',
            process: {
                backgroundProcess: [
                    {idMega: '13', nodeCount: 58},
                    {idMega: '16', nodeCount: 58},
                    {idMega: '18', nodeCount: 58},
                    {idMega: '38', nodeCount: 58},
                    {idMega: '40', nodeCount: 58},
                    {idMega: '42', nodeCount: 58},
                    {idMega: '44', nodeCount: 58},
                    {idMega: '52', nodeCount: 58},
                    {idMega: '54', nodeCount: 58},
                    {idMega: '55', nodeCount: 58},
                    {idMega: '70', nodeCount: 58},
                ],
                onlineProcess: [
                    {idMega: '13', nodeCount: 58},
                    {idMega: '16', nodeCount: 58},
                    {idMega: '18', nodeCount: 58},
                    {idMega: '38', nodeCount: 58},
                    {idMega: '40', nodeCount: 58},
                    {idMega: '42', nodeCount: 58},
                    {idMega: '44', nodeCount: 58},
                    {idMega: '52', nodeCount: 58},
                    {idMega: '54', nodeCount: 58},
                    {idMega: '55', nodeCount: 58},
                    {idMega: '70', nodeCount: 58},
                ]
            }
        }
    ],
    processName: {
        backgroundProcess: 'фоновые',
        onlineProcess: 'онлайн'
    },
    color: {
        main: '#A5CF70',
        stop: '#F9B7B7',
        standIn: '#ECDF6C'
    }
}

export const reducerApp = (state, action) => {
    switch (action.type) {
        case CONST_UPDATE_GLOBAL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
