import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Week 24 Menu';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare("Breakfast")}
                    {this.renderSquare("Lunch")}
                    {this.renderSquare("Dinner")}

                </div>
                <div className="board-row">
                    {this.renderSquare("Sunday")}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Monday")}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Tuesday")}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Tuesday")}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Wednesday")}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Friday")}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare("Saturday")}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class WeekMenu extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <WeekMenu />,
    document.getElementById('root')
);
