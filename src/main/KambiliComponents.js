import React from 'react';

export default class MealTypeComponent extends React.Component {
    render() {
        return (
            <div className="menu-type">
                {this.props.value}
            </div>);
    }
}