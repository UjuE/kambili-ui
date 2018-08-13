import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeekMenuComponent from './main/WeekMenuComponent'

class Board extends React.Component {
    render(){
        return <WeekMenuComponent/>;
    }
}

// ========================================

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
