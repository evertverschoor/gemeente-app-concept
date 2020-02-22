import React from 'react'

import BaseWindow from '../../base-window/base-window'
import contactIcon from '../../../icons/contact-black.png'

class ContactCenterWindow extends BaseWindow {

    static get actionWindowName() {
        return 'contactCenter'
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

export default ContactCenterWindow