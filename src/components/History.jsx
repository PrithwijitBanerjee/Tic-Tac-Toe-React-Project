import React from 'react'

const History = ({history,moveTo,currentMove}) => {
  return (
        <>
           <div className='history-wrapper'>
              <ul className='history'>
                  {
                    history && history.map((_,index) =>{
                        return (<>
                              <li key={index}>
                                    <button className={`btn-move ${currentMove === index? 'active':''}`} onClick={()=>moveTo(index)}>Go To #{index}</button>
                              </li>
                        </>)
                    })
                  }
              </ul>
           </div> 
        </>
  )
}

export default History