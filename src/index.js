import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'

class Something extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            sunday:[],
            monday:[],
            tuesday:[],
            wednesday:[],
            thursday:[],
            friday:[],
            saturday:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8077")
            .then(response => {
                console.log("Response", response);
                let day_menus = response.data.map((day_menu) => {
                    return ({
                        day: day_menu.day,
                        menu: day_menu.menu_plans
                    })
                });
                console.log(day_menus.find((x) => x.day === "Sunday").menu);
                this.setState({
                    sunday: day_menus.find((x) => x.day === "Sunday").menu,
                    monday: day_menus.find((x) => x.day === "Monday").menu,
                    tuesday: day_menus.find((x) => x.day === "Tuesday").menu,
                    wednesday: day_menus.find((x) => x.day === "Wednesday").menu,
                    thursday: day_menus.find((x) => x.day === "Thursday").menu,
                    friday: day_menus.find((x) => x.day === "Friday").menu,
                    saturday: day_menus.find((x) => x.day === "Saturday").menu
                })
            })
            .catch((error) => {
                console.log("error",error)
            })
    }
    render() {
        return (
            <div>
                { this.state.sunday.map((it) => {
                    return (
                      <div>
                          {it.menu_type} {it.meal_name}
                      </div>
                    );
                }) }
            </div>
        )
    }

}

class Board extends React.Component {
    renderSquare() {
        return <Something />;
    }

    render() {
        const status = 'Week 24 Menu';

        return (
            <div>
                <div className="status">{status}</div>
                    {this.renderSquare()}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);
