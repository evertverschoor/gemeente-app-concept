import { OPEN_WINDOW, CLOSE_WINDOW, ANIMATE_CLOSE_WINDOW } from '../actions/types'
import openWindowReducer from './open-window-reducer'
import closingWindowReducer from './closing-window-reducer'

const initialState = {
    openWindows: [],
    closingWindows: []
};

export default function reducer(state = initialState, action) {
    const newState = { ...state }

    switch(action.type) {
        case OPEN_WINDOW:
        case CLOSE_WINDOW:
            newState.openWindows = openWindowReducer(newState.openWindows, action)
            break
        case ANIMATE_CLOSE_WINDOW:
            newState.closingWindows = closingWindowReducer(newState.closingWindows, action)
            break
        default:
            break
    }

    console.log('Action:')
    console.log(action)
    console.log('Old state:')
    console.log(state)
    console.log('New state:')
    console.log(newState)

    return newState
}