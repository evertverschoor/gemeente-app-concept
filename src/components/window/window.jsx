import React from 'react'
import './window.css'

class Window extends React.Component {

    render() {
        return (
            <div className="window">
                <h4 className="window-title">{this.props.title}</h4>
                {this.props.children}
            </div>
        )
    }
}

export default Window