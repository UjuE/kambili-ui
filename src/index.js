import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeekMenuComponent from './main/WeekMenuComponent'
import HeaderComponent from "./main/HeaderComponent";

class Board extends React.Component {
    render() {
        return (
            <div id="body">
                <HeaderComponent/>
                <WeekMenuComponent baseUrl="http://localhost:5000/meal/week/2019-47"/>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
