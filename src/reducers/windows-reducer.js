import { OPEN_WINDOW, CLOSE_WINDOW, ANIMATE_CLOSE_WINDOW } from '../actions/types'
import { OPENED, CLOSED, CLOSING, INCIDENTS, SETTINGS, CONTACT_CENTER } from '../components/windows/index'

const initialState = createInitialState()

export default function reducer(state = initialState, action) {
    const newState = { ...state }

    switch(action.type) {
        case OPEN_WINDOW:
            newState[action.payload] = OPENED
            break
        case CLOSE_WINDOW:
            newState[action.payload] = CLOSED
            break
        case ANIMATE_CLOSE_WINDOW:
            newState[action.payload] = CLOSING
            break
        default:
            break
    }

    return newState
}

function createInitialState() {
    const returnValue = {}

    returnValue[INCIDENTS] = CLOSED
    returnValue[SETTINGS] = CLOSED
    returnValue[CONTACT_CENTER] = CLOSED

    return returnValue
}