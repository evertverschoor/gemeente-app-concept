import React from 'react'
import { connect } from 'react-redux'

import { INCIDENTS, SETTINGS, CONTACT_CENTER } from '../../windows/window-ids'

import IncidentsWindow from '../../windows/incidents-window/incidents-window'
import SettingsWindow from '../../windows/settings-window/settings-window'
import ContactCenterWindow from '../../windows/contact-center-window/contact-center-window'

class WindowManager extends React.Component {

    render() {
        return (
            <>
                {this.shouldShow(INCIDENTS) && <IncidentsWindow title="Incidenten" />}
                {this.shouldShow(SETTINGS) && <SettingsWindow title="Instellingen" />}
                {this.shouldShow(CONTACT_CENTER) && <ContactCenterWindow title="Contact Center" />}
            </>
        )
    }

    shouldShow(window) {
        return this.props.openWindows.includes(window)
    }
}

const mapStateToProps = state => {
    return { openWindows: state.openWindows }
}

export default connect(mapStateToProps)(WindowManager)