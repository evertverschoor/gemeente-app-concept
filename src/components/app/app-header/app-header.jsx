import React from 'react'
import './app-header.css'

class AppHeader extends React.Component {

    render() {
        return (
            <p className="app-header">
                Portal - {this.props.accountName}
            </p>
        )
    }
}

export default AppHeader