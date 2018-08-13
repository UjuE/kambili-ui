import React from 'react';
import DayComponent from "./DayComponent"
import MealComponent from "./MealComponents";

export default class DayMenuComponent extends React.Component {
    render() {
        var mealComponent =
            this.props.meals.map((x) => {
                return (
                    <MealComponent type={x.meal_type} name={x.meal_name} />
                )
            });

        return (
            <div className='day-block'>
                <DayComponent value={this.props.day}/>
                {mealComponent}
            </div>
        )
    }
}