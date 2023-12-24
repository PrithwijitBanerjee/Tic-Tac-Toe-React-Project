import Board from "./components/Board"
import './style.scss';
import { useState } from "react";
import { calculateWinner } from './calculateWinner.js';
import StatusMessage from "./components/StatusMessage.jsx";
import History from './components/History.jsx';
import ResetHistory from "./components/ResetHistory.jsx";

const NEW_GAME = [{
  squareArr: Array(9).fill(null),
  isNextX: true,
}]; // Global Constant Variable....

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  // const [history, setHistory] = useState([{
  //   squareArr: Array(9).fill(null),
  //   isNextX: true,
  // }]);
  const [currentMove, setCurrentMove] = useState(0);
  let gamingBoardState = history[currentMove];
  // const [squareArr, setSquareArr] = useState(Array(9).fill(null));
  // const [isNextX,setIsNextX] = useState(true);
  //   const nextPlayer = isNextX ? 'X':'O'; // Derived value from State...
  const {isWinner, squarePos} = calculateWinner(gamingBoardState?.squareArr); // Derived value from  State...
  //   const winnerMessage = isWinner? `Winner is ${isWinner}`: `${nextPlayer}'s Turn`;

  const handleSquareChange = squarePosition => {
    if (gamingBoardState.squareArr[squarePosition] || isWinner) {
      return;
    }
    setHistory(prevSquareArr => {
      const isTraversing = currentMove + 1 !== history?.length;
      const lastSquareState = isTraversing ? history[currentMove] : history[history?.length - 1];

      const nextSquareState = lastSquareState?.squareArr?.map((item, id) => {
        if (id === squarePosition) {
          return lastSquareState?.isNextX ? 'X' : 'O';
        }
        return item;
      });
      const base = isTraversing ? prevSquareArr.slice(0, prevSquareArr.indexOf(lastSquareState) + 1) : prevSquareArr;
      return base.concat({ squareArr: nextSquareState, isNextX: !lastSquareState?.isNextX });

      // return prevSquareArr.map((index, position) => {
      //     if (position === squarePosition) {
      //         return isNextX?'X':'O';
      //     }
      //     return index;
      // })
    })

    // setIsNextX(prevNextX=> !prevNextX);
    setCurrentMove(move => move + 1); //update the currentMove State...
  }
  const moveTo = move => {
    setCurrentMove(move); // set current move to specific position...
  }

  const clearHistory = () =>{
      setHistory(NEW_GAME);
      setCurrentMove(0);
  }
  return (
    <>
      <div className="app">
        <h1><spa className="text-orange">TIC</spa> <span className="text-green">TAC</span> TOE</h1>
        <StatusMessage gamingBoardState={gamingBoardState} isWinner={isWinner} />
        <Board squareArr={gamingBoardState?.squareArr} handleSquareChange={handleSquareChange} squarePos={squarePos}/>
        <ResetHistory clearHistory={clearHistory} isWinner={isWinner}/>
        <h2 style={{ color: 'white', fontWeight: 'normal' }}>Current Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
        <div className="bg-balls"></div>
      </div>
    </>
  )
}

export default App
