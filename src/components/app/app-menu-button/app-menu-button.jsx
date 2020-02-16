import React from 'react'
import './app-menu-button.css'

class AppMenuButton extends React.Component {

    render() {
        return (
            <button className={'app-menu-button' + this.additionalClasses}>
                <img src={this.props.iconUrl} alt={this.props.label}/>
                <p>{this.props.label}</p>
            </button>
        )
    }

    get additionalClasses() {
        return (
            (this.props.bottom ? ' bottom' : '') +
            (this.props.selected ? ' selected' : '')
        )
    }
}

export default AppMenuButton