import { OPEN_WINDOW, CLOSE_WINDOW } from '../actions/types'

export default function reducer(state, action) {
    let newState = state.slice()

    switch(action.type) {
        case OPEN_WINDOW:
            newState.push(action.payload)
            break
        case CLOSE_WINDOW:
            newState = newState.filter(w => w !== action.payload)
            break;
        default:
            break
    }

    return newState
}