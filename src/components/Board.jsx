import Square from "./Square"
const Board = ({ squareArr, handleSquareChange, squarePos }) => {
    const RenderSquare = ({ pos }) => { // Nested Component...
        const isWinningSquares = squarePos.includes(pos); // returns boolean values...
        return <>
            <Square
                value={squareArr[pos]}
                onSquareClick={() => handleSquareChange(pos)}
                isWinningSquares={isWinningSquares}
            />
        </>
    }
    return (
        <>
            <div className="board">
                <div className="board-row">
                    <RenderSquare pos={0} />
                    <RenderSquare pos={1} />
                    <RenderSquare pos={2} />

                </div>
                <div className="board-row">
                    <RenderSquare pos={3} />
                    <RenderSquare pos={4} />
                    <RenderSquare pos={5} />
                </div>
                <div className="board-row">
                    <RenderSquare pos={6} />
                    <RenderSquare pos={7} />
                    <RenderSquare pos={8} />
                </div>
            </div>
        </>
    )
}

export default Board