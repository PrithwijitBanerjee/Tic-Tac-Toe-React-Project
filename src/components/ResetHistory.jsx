import React from 'react'

const ResetHistory = ({ clearHistory, isWinner }) => {
    const winnerClassName = isWinner && 'active';
    return (
        <>
            <button className={`btn-reset ${winnerClassName}`} onClick={() => clearHistory()}>Reset History</button>
        </>
    )
}

export default ResetHistory