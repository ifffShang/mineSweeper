import React from "react";
import Board from "../Board";
import { useNavigate } from 'react-router-dom';

import "./style.css";

class EasyGame extends React.Component {
  
  constructor(props) {
    super(props);

    this.boardElement = React.createRef();

    this.state = {
      height: 8,
      width: 8,
      mines: 10,
      gameStatus: 0
    };
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleChangeHeight = event => {
    const val = clamp(event.target.value, 5, 18);
    this.handleChange("height", val);
  };

  handleChangeWidth = event => {
    const val = clamp(event.target.value, 5, 18);
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
    const { navigate } = this.props;
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
          
          <button onClick={() => navigate('/difficulty')}>Back</button>


        </div>
      </div>
    );
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export default EasyGame;
