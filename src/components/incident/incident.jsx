import React from 'react'
import './incident.css'

class Incident extends React.Component {

    render() {
        return (
            <div className="incident" style={{borderColor: this.borderColor}}>
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

    get borderColor() {
        switch(this.props.status) {
            case 'on-track':
                return '#1cd95d'
            case 'breached':
                return '#c81616'
            default:
                return "rgba(141,11,0,1)"
        }
    }
}

export default Incident