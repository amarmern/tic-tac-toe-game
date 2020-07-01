import React from 'react';
import Square from './Square/Square.jsx';

function Board(props) {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div id='board' className='row mt-4'>
      {board.map((e, i) => (
        <Square key={i} />
      ))}
    </div>
  );
}

export default Board;
