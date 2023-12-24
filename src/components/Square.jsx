const Square = ({ value, onSquareClick,isWinningSquares }) => {
  const valueClassName = value === 'X'? 'text-green':'text-orange';
  const winningSquaresClassName = isWinningSquares && 'winning';
  return (
    <>
      <button type="button" className={`square ${valueClassName} ${winningSquaresClassName}`} onClick={onSquareClick}>{value}</button>
    </>
  )
}

export default Square