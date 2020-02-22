import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from '../../base-window/base-window'
import BaseWindow from '../../base-window/base-window'

import settingsIcon from '../../../icons/settings-black.png'
import { SETTINGS } from '../index'

class SettingsWindow extends BaseWindow {

    static get actionWindowName() {
        return SETTINGS
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

export default connect(mapStateToProps(SETTINGS))(SettingsWindow)