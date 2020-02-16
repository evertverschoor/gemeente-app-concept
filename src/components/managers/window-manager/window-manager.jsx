import React from 'react'
import { connect } from 'react-redux'

import IncidentsWindow from '../../windows/incidents-window/incidents-window'

class WindowManager extends React.Component {

    render() {
        return <>
            { this.shouldShow(IncidentsWindow) && <IncidentsWindow title="Incidenten" /> }
        </>
    }

    shouldShow(window) {
        return this.props.openWindows.includes(window.actionWindowName)
    }
}

const mapStateToProps = state => {
    return { openWindows: state.openWindows }
}

export default connect(mapStateToProps)(WindowManager)