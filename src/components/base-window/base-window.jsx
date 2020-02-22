import React from 'react'
import './base-window.css'

import { CLOSING } from '../windows/index'

class BaseWindow extends React.Component {

    render() {
        return (
            <div className={this.classNames}>
                <h4 className="base-window-title">
                    <img className="base-window-icon" src={this.iconUrl} alt={this.props.title}></img>
                    {this.props.title}
                </h4>
                {this.content}
            </div>
        )
    }

    get classNames() {
        const shouldDisappear = this.props.window === CLOSING
        return `base-window ${shouldDisappear ? 'exit' : ''}`
    }

    get content() {
        throw new Error('Not yet implemented: "get content()"!')
    }

    get iconUrl() {
        throw new Error('Not yet implemented: "static get iconUrl()"!')
    }

    get actionWindowName() {
        throw new Error('Not yet implemented: "get actionWindowName()"!')
    }
}

export function mapStateToProps(window) {
    console.log('mapStateToProps called with:')
    console.log(window)
    return state => {
        return { window: state.windows[window] }
    }
}

export default BaseWindow