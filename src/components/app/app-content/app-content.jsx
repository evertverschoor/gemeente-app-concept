import React from 'react'
import './app-content.css'

class AppContent extends React.Component {

    render() {
        return (
            <div className="app-content">
                {this.props.children}
            </div>
        )
    }
}

export default AppContent