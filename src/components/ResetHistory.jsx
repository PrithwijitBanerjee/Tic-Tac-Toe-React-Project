import React from 'react'

const ResetHistory = ({ clearHistory, isWinner }) => {
    return (
        <>
            <button className={`btn-reset ${isWinner && 'active'}`} onClick={() => clearHistory()}>Reset History</button>
        </>
    )
}

export default ResetHistory