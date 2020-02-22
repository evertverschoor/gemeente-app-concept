import React from 'react'
import { connect } from 'react-redux'
import { openWindow, animateCloseWindow } from '../../../actions/index'

import AppMenuButton from '../../app/app-menu-button/app-menu-button'

import settingsIcon from '../../../icons/settings-white.png'
import incidentsIcon from '../../../icons/incidents-white.png'
import logOutIcon from '../../../icons/logout-white.png'
import contactIcon from '../../../icons/contact-white.png'

import { INCIDENTS, SETTINGS, CONTACT_CENTER, OPENED } from '../../windows/index'

class MenuManager extends React.Component {

    render() {
        return <>
            <AppMenuButton 
                iconUrl={incidentsIcon} 
                label="Incidenten" 
                onClick={ () => this.onButtonClicked(INCIDENTS) }
                selected={ this.isSelected(INCIDENTS) } />

            <AppMenuButton 
                iconUrl={settingsIcon} 
                label="Instellingen" 
                onClick={ () => this.onButtonClicked(SETTINGS) }
                selected={ this.isSelected(SETTINGS)} />

            <AppMenuButton 
                iconUrl={contactIcon} 
                label="Contact Center" 
                onClick={ () => this.onButtonClicked(CONTACT_CENTER) }
                selected={ this.isSelected(CONTACT_CENTER)} />

            <AppMenuButton 
                iconUrl={logOutIcon} 
                label="Uitloggen" 
                onClick={ this.onLogOutClicked }
                bottom />
        </>
    }

    onButtonClicked(window) {
        if(this.isSelected(window))
            this.props.animateCloseWindow(window)
        else
            this.props.openWindow(window)
    }

    onLogOutClicked() {
        console.log('Log out clicked')
    }

    isSelected(window) {
        return this.props.windows[window] === OPENED
    }
}

const mapStateToProps = state => {
    return { windows: state.windows }
}

const mapDispatchToProps = dispatch => {
    return {
        openWindow: window => dispatch(openWindow(window)),
        animateCloseWindow: window => dispatch(animateCloseWindow(window)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuManager)