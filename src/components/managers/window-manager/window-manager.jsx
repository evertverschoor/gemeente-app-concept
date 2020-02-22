import React from 'react'
import { connect } from 'react-redux'

import { INCIDENTS, SETTINGS, CONTACT_CENTER, CLOSED } from '../../windows/index'

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
        return this.props.windows[window] !== CLOSED
    }
}

const mapStateToProps = state => {
    return { windows: state.windows }
}

export default connect(mapStateToProps)(WindowManager)