import React from 'react';

export default class MealComponent extends React.Component {
    render() {
        var className = "meal "+ this.props.type.toLocaleLowerCase();
        return (
            <div className={className} >
                <div className="type">
                    {this.props.type}
                </div>
                <div className="meal-name">
                    {this.props.name}
                </div>
            </div>);
    }
}