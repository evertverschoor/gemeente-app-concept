import { ANIMATE_CLOSE_WINDOW, CLOSE_WINDOW } from '../actions/types'

const windowAnimationMiddleware = store => next => action => {

    switch (action.type) {
        case ANIMATE_CLOSE_WINDOW:
            next(action)

            setTimeout(() => {
                store.dispatch({
                    type: CLOSE_WINDOW,
                    payload: action.payload
                })
            }, 100)
            break
        default: next(action)
    }
}

export default windowAnimationMiddleware