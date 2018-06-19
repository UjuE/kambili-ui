import React from 'react';
import DayComponent from "./DayComponent"
import MealComponent from "./MealComponents";

export default class DayMenuComponent extends React.Component {
    render() {
        return (
            <div>
                <DayComponent value={this.props.day}/>
                <MealComponent type="Breakfast" name={this.props.breakfast} />
                <MealComponent type="Lunch" name={this.props.lunch} />
                <MealComponent type="Dinner" name={this.props.dinner} />
            </div>
        )
    }
}