import React from "react";
import Board from "../Board";
import "./style.css";

class HardGame extends React.Component {
  constructor(props) {
    super(props);
    this.boardElement = React.createRef();

    this.state = {
      height: 30,  // Larger grid for hard difficulty
      width: 16,   // Larger grid width
      mines: 99,   // Increased number of mines
      gameStatus: 0
    };
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleChangeHeight = event => {
    const val = clamp(event.target.value, 16, 30); // Adjusted limits for hard mode
    this.handleChange("height", val);
  };

  handleChangeWidth = event => {
    const val = clamp(event.target.value, 16, 30); // Adjusted limits for hard mode
    this.handleChange("width", val);
  };

  handleChangeMines = event => {
    const cap = Math.floor((this.state.height * this.state.width) / 3);
    const val = clamp(event.target.value, 1, cap);
    this.handleChange("mines", val);
  };

  restartGame = () => {
    this.boardElement.current.restartBoard();
  };

  render() {
    const { height, width, mines, gameStatus } = this.state;
    return (
      <div className="game">
        <Board
          ref={this.boardElement}
          height={height}
          width={width}
          mines={mines}
          gameStatus={gameStatus}
        />
        <div className="control-buttons">
          <button onClick={this.restartGame}>Restart</button>
        </div>
      </div>
    );
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export default HardGame;
