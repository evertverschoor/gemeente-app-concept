import { ANIMATE_CLOSE_WINDOW } from '../actions/types'

export default function reducer(state, action) {
    let newState = state.slice()

    switch(action.type) {
        case ANIMATE_CLOSE_WINDOW:
            newState.push(action.payload)
            break
        default:
            break
    }

    return newState
}