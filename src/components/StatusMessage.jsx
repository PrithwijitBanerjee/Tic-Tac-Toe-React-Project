import React from 'react'
import { calculateWinner } from '../calculateWinner';

const StatusMessage = ({ gamingBoardState,isWinner }) => {
    const {squareArr,isNextX} = gamingBoardState; // destructing object...
    const nextPlayer = isNextX ? 'X' : 'O'; // Derived State...
    const isArrayFull = squareArr.every(item => item !== null);
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
                        className={isWinner === 'X' ? 'text-green' : 'text-orange'}>{isWinner}</span></h1>
                </>)
            }
            {
                !isWinner && !isArrayFull && nextPlayer && (<>
                    <h1 className='status-message'>Next Player is: <span
                        className={isNextX ? 'text-green' : 'text-orange'}>{nextPlayer}</span></h1>
                </>)
            }
        </>
    )
}

export default StatusMessage