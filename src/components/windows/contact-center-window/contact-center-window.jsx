import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from '../../base-window/base-window'
import BaseWindow from '../../base-window/base-window'

import contactIcon from '../../../icons/contact-black.png'
import { CONTACT_CENTER } from '../window-ids'

class ContactCenterWindow extends BaseWindow {

    get actionWindowName() {
        return CONTACT_CENTER
    }

    get iconUrl() {
        return contactIcon
    }

    get content() {
        return (
            <>
               <p>Belletje krijgen.</p>
            </>
        )
    }
}

export default connect(mapStateToProps)(ContactCenterWindow)