import React from 'react'
import './base-window.css'

class BaseWindow extends React.Component {

    render() {
        return (
            <div className="base-window">
                <h4 className="base-window-title">{this.props.title}</h4>
                {this.content}
            </div>
        )
    }

    get content() {
        throw new Error('Not yet implemented: "get content()"!')
    }

    static get actionWindowName() {
        throw new Error('Not yet implemented: "static get actionWindowName()"!')
    }
}

export default BaseWindow