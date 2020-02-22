import React from 'react'

import BaseWindow from '../../base-window/base-window'
import settingsIcon from '../../../icons/settings-black.png'

class SettingsWindow extends BaseWindow {

    static get actionWindowName() {
        return 'settings'
    }

    get iconUrl() {
        return settingsIcon
    }

    get content() {
        return (
            <>
               <p>There are settings...</p>
            </>
        )
    }
}

export default SettingsWindow