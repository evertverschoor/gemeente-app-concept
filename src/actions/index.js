import { OPEN_WINDOW, CLOSE_WINDOW } from './types'

export function openWindow(name) {
    return { type: OPEN_WINDOW, payload: name }
}

export function closeWindow(name) {
    return { type: CLOSE_WINDOW, payload: name }
}