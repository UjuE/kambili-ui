import React from 'react';

export default class MealComponent extends React.Component {
    render() {
        return (
            <div className="meal" id={this.props.type.toLocaleLowerCase()}>
                <div className="type">
                    {this.props.type}
                </div>
                <div className="meal-name">
                    {this.props.name}
                </div>
            </div>);
    }
}