import { OPEN_WINDOW, CLOSE_WINDOW, ANIMATE_CLOSE_WINDOW } from './types'

export function openWindow(name) {
    return { type: OPEN_WINDOW, payload: name }
}

export function closeWindow(name) {
    return { type: CLOSE_WINDOW, payload: name }
}

export function animateCloseWindow(name) {
    return { type: ANIMATE_CLOSE_WINDOW, payload: name }
}