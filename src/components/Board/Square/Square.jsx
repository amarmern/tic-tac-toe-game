import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero';

function Square(props) {
  return (
    <div className='col col-md-4 cell symbol text-center'>
      {/* <Cross /> */}
      <Zero />
    </div>
  );
}

export default Square;
