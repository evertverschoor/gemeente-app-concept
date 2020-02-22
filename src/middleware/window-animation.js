import { ANIMATE_CLOSE_WINDOW } from '../actions/types'
import { closeWindow } from '../actions/index'

const windowAnimationMiddleware = store => next => action => {

    switch (action.type) {
        case ANIMATE_CLOSE_WINDOW:
            next(action)

            setTimeout(() => {
                store.dispatch(closeWindow(action.payload))
            }, 200)
            break
        default: next(action)
    }
}

export default windowAnimationMiddleware