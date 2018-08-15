import React from 'react';

export default class DayComponent extends React.Component {
    render() {
        var className = "day "+this.props.value.toLocaleLowerCase()+"-day";
        return (
            <div className="day">
                {this.props.value}
            </div>);
    }
}