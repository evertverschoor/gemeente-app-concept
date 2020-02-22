import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from '../../base-window/base-window'
import BaseWindow from '../../base-window/base-window'

import Incident from '../../incident/incident'
import incidentsIcon from '../../../icons/incidents-black.png'
import { INCIDENTS } from '../index'

class IncidentsWindow extends BaseWindow {

    get actionWindowName() {
        return INCIDENTS
    }

    get iconUrl() {
        return incidentsIcon;
    }

    get content() {
        return (
            <>
                <Incident
                    name="Kan vuilnisbak niet openen"
                    date="01-13-2020"
                    caller="#370051"
                    description="Stuur zsm hulp"
                    status="breached" />
                <Incident
                    name="Mijn raam is kapotgegooid"
                    date="02-13-2020"
                    caller="#370052"
                    description="Dit pik ik niet"
                    status="on-track" />
                <Incident
                    name="Autoschade"
                    date="03-13-2020"
                    caller="#170240"
                    description="Dit pik ik ook niet"
                    status="on-track" />
            </>
        )
    }
}

export default connect(mapStateToProps(INCIDENTS))(IncidentsWindow)