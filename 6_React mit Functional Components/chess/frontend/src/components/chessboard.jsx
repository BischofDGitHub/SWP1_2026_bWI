import React, { useState, useEffect} from 'react';


export default function chessboard() {
    //const board = Array.from({ length: 8 }, (_, i) => Array.from({ length: 8 }, (_, j) => (i + j) % 2 === 0));
    const [board, setBoard] = useState([]);
    
    useEffect(() => {
        const newBoard = [];

        for (let i = 0; i < 8; i++)
        {
            const inner=[];
            for (let j = 0; j < 8; j++)
            {
                inner.push((i + j) % 2 === 0 ? 0 : 1);
            }
            newBoard.push(inner);
        }
        setBoard(newBoard);
    }, []);

  return (
      <div>         
          <div className='grid grid-cols-8 grid-rows-8 center'>
              {board.map((row, rowIndex) => (
                  <div key={rowIndex} className="">
                      {row.map((cell, cellIndex) => (
                          <div key={cellIndex} className={`w-10 h-10 ${cell === 0 ? 'bg-white' : 'bg-black'}`} />
                      ))}
                  </div>
              ))}
          </div>
    </div>
  )
}
