import React from 'react'
import './incident.css'

class Incident extends React.Component {

    render() {
        return (
            <div className="incident">
                <div className="incident-header">
                    <p className="incident-name">{this.props.name}</p>
                    <p className="incident-date">{this.props.date} door <a href="/">{this.props.caller}</a></p>
                </div>
                <p className="incident-description">
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default Incident