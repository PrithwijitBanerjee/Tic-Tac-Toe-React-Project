import React from 'react'
import { calculateWinner } from '../calculateWinner';

const StatusMessage = ({ gamingBoardState,isWinner }) => {
    const {squareArr,isNextX} = gamingBoardState; // destructing object...
    const nextPlayer = isNextX ? 'X' : 'O'; // Derived State...
    const isArrayFull = squareArr.every(item => item !== null);
    let isWinnerClassName = isWinner === 'X' ? 'text-green' : 'text-orange';
    let isNextXClassName = isNextX ? 'text-green' : 'text-orange';
    return (
        <>
            {
                isArrayFull && !isWinner && (<>
                    <h1 className='status-message'><span className='text-orange'>O</span> and <span className='text-green'>X</span> Tied</h1>
                </>)
            }
            {
                isWinner && !isArrayFull && (<>
                    <h1 className='status-message'>Winner is: <span
                        className={isWinnerClassName}>{isWinner}</span></h1>
                </>)
            }
            {
                !isWinner && !isArrayFull && nextPlayer && (<>
                    <h1 className='status-message'>Next Player is: <span
                        className={isNextXClassName}>{nextPlayer}</span></h1>
                </>)
            }
        </>
    )
}

export default StatusMessage