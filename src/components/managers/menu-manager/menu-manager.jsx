import React from 'react'
import { connect } from 'react-redux'
import { openWindow, closeWindow } from '../../../actions/index'

import AppMenuButton from '../../app/app-menu-button/app-menu-button'
import IncidentsWindow from '../../windows/incidents-window/incidents-window'

import settingsIcon from '../../../icons/settings.png'
import incidentsIcon from '../../../icons/incidents.png'
import logOutIcon from '../../../icons/logout.png'
import contactIcon from '../../../icons/contact.png'

class MenuManager extends React.Component {

    render() {
        return <>
            <AppMenuButton 
                iconUrl={incidentsIcon} 
                label="Incidenten" 
                onClick={ () => this.onButtonClicked(IncidentsWindow.actionWindowName) }
                selected={ this.isSelected(IncidentsWindow.actionWindowName) } />

            <AppMenuButton 
                iconUrl={settingsIcon} 
                label="Instellingen" 
                onClick={ () => this.onButtonClicked('settings') }
                selected={ this.isSelected('settings') && true} />

            <AppMenuButton 
                iconUrl={contactIcon} 
                label="Contact Center" 
                onClick={ () => this.onButtonClicked('contactCenter') }
                selected={ this.isSelected('contactCenter') && true} />

            <AppMenuButton 
                iconUrl={logOutIcon} 
                label="Uitloggen" 
                onClick={ this.onLogOutClicked }
                bottom />
        </>
    }

    onButtonClicked(window) {
        if(this.isSelected(window))
            this.props.closeWindow(window)
        else
            this.props.openWindow(window)
    }

    onLogOutClicked() {
        console.log('Log out clicked')
    }

    isSelected(window) {
        return this.props.openWindows.includes(window)
    }
}

const mapStateToProps = state => {
    return { openWindows: state.openWindows }
}

const mapDispatchToProps = dispatch => {
    return {
        openWindow: window => dispatch(openWindow(window)),
        closeWindow: window => dispatch(closeWindow(window))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuManager)