import React from 'react'
import './base-window.css'

class BaseWindow extends React.Component {

    render() {
        return (
            <div className="base-window">
                <h4 className="base-window-title">
                    <img className="base-window-icon" src={this.iconUrl} alt={this.props.title}></img>
                    {this.props.title}
                </h4>
                {this.content}
            </div>
        )
    }

    get content() {
        throw new Error('Not yet implemented: "get content()"!')
    }

    get iconUrl() {
        throw new Error('Not yet implemented: "static get iconUrl()"!')
    }

    static get actionWindowName() {
        throw new Error('Not yet implemented: "static get actionWindowName()"!')
    }
}

export default BaseWindow