import React from 'react'
import { connect } from 'react-redux'

import IncidentsWindow from '../../windows/incidents-window/incidents-window'
import SettingsWindow from '../../windows/settings-window/settings-window'
import ContactCenterWindow from '../../windows/contact-center-window/contact-center-window'

class WindowManager extends React.Component {

    render() {
        return (
            <>
                {this.shouldShow(IncidentsWindow) && <IncidentsWindow title="Incidenten" />}
                {this.shouldShow(SettingsWindow) && <SettingsWindow title="Instellingen" />}
                {this.shouldShow(ContactCenterWindow) && <ContactCenterWindow title="Contact Center" />}
            </>
        )
    }

    shouldShow(window) {
        return this.props.openWindows.includes(window.actionWindowName)
    }
}

const mapStateToProps = state => {
    return { openWindows: state.openWindows }
}

export default connect(mapStateToProps)(WindowManager)