import React from 'react'
import './app-menu.css'

class AppMenu extends React.Component {

    render() {
        return (
            <div className="app-menu">
                {this.props.children}
            </div>
        )
    }
}

export default AppMenu