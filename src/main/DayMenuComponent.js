import React from 'react';
import DayComponent from "./DayComponent"
import MealComponent from "./MealComponents";
import moment from 'moment'

export default class DayMenuComponent extends React.Component {
    render() {
        var mealComponent =
            this.props.meals.map((x) => {
                return (
                    <MealComponent type={x.meal_type} name={x.meal_name} />
                )
            });

        var isToday = moment().format('dddd').toLocaleLowerCase() === this.props.day.toLocaleLowerCase() ? "today" : "";
        var className = "day-block "+ isToday;
        return (
            <div className={className}>
                <DayComponent value={this.props.day}/>
                {mealComponent}
            </div>
        )
    }
}