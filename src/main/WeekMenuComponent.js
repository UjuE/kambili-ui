import axios from 'axios'
import moment from 'moment'
import DayMenuComponent from "./DayMenuComponent";
import React from 'react';

export default class WeekMenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week_number: moment().format('W'),
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
        }
    }

    componentDidMount() {
        axios.get(this.props.baseUrl)
            .then(response => {
                let day_menus = response.data.week_menu.map((day_menu) => {
                    return ({
                        day: day_menu.day,
                        menu: day_menu.meal_plans
                    })
                });

                let meal_type_to_order_map = {
                    breakfast: 1,
                    brunch: 2,
                    lunch: 3,
                    dinner: 4,
                    tea: 5,
                    nightcap: 6
                };
                let sortMenus = function (menus) {
                    return menus.sort(function (left, right) {
                        var leftValue = meal_type_to_order_map[left.meal_type.toLocaleLowerCase()] || 7;
                        var rightValue = meal_type_to_order_map[right.meal_type.toLocaleLowerCase()] || 7;
                        return leftValue > rightValue ? 1 : leftValue < rightValue ? -1 : 0;
                    });
                };

                this.setState({
                    sunday: sortMenus(day_menus.find((x) => x.day === "Sunday").menu),
                    monday: sortMenus(day_menus.find((x) => x.day === "Monday").menu),
                    tuesday: sortMenus(day_menus.find((x) => x.day === "Tuesday").menu),
                    wednesday: sortMenus(day_menus.find((x) => x.day === "Wednesday").menu),
                    thursday: sortMenus(day_menus.find((x) => x.day === "Thursday").menu),
                    friday: sortMenus(day_menus.find((x) => x.day === "Friday").menu),
                    saturday: sortMenus(day_menus.find((x) => x.day === "Saturday").menu),
                })
            })
            .catch((error) => {
                console.log("error", error)
            })
    }


    render() {
        return (
            <div className="week-menu">
                <div className="week-menu-title">Week {this.state.week_number} Meal Plan</div>
                <div className="days">
                    <DayMenuComponent day="Sunday" meals={this.state.sunday}/>
                    <DayMenuComponent day="Monday" meals={this.state.monday}/>
                    <DayMenuComponent day="Tuesday" meals={this.state.tuesday}/>
                    <DayMenuComponent day="Wednesday" meals={this.state.wednesday}/>
                    <DayMenuComponent day="Thursday" meals={this.state.thursday}/>
                    <DayMenuComponent day="Friday" meals={this.state.friday}/>
                    <DayMenuComponent day="Saturday" meals={this.state.saturday}/>
                </div>
            </div>
        )
    }

}