import windowsReducer from './windows-reducer'

const initialState = createInitialState()

export default function reducer(state = initialState, action) {
    const newState = { ...state }

    newState.windows = windowsReducer(newState.windows, action)

    console.log('Action:')
    console.log(action)
    console.log('Old state:')
    console.log(state)
    console.log('New state:')
    console.log(newState)

    return newState
}

function createInitialState() {
    return { windows: undefined }
}