import { OPEN_WINDOW, CLOSE_WINDOW } from '../actions/types'
import menuReducer from './menuReducer'

const initialState = {
    openWindows: []
};

export default function reducer(state = initialState, action) {
    const newState = { ...state }

    switch(action.type) {
        case OPEN_WINDOW:
        case CLOSE_WINDOW:
            newState.openWindows = menuReducer(newState.openWindows, action)
            break;
        default:
            break
    }

    // console.log('Old state:')
    // console.log(state)
    // console.log('New state:')
    // console.log(newState)

    return newState
}