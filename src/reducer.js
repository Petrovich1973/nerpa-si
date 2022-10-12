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
