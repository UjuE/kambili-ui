import React from 'react';

export default class DayComponent extends React.Component {
    render() {
        return (
            <div className="day">
                {this.props.value}
            </div>);
    }
}