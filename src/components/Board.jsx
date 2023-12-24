import Square from "./Square"
const Board = ({squareArr,handleSquareChange}) => {
    
    const RenderSquare = ({ pos }) => { // Nested Component...
        return <>
            <Square value={squareArr[pos]} onSquareClick={() => handleSquareChange(pos)} />
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