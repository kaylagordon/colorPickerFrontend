import React, { useState } from 'react';
import './ColorCard.scss';
import PropTypes from 'prop-types';

function ColorCard() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
//set global state to randomColor
  const [ locked, switchLock ] = useState();


  return (
    <div className='color-card' style={{
      backgroundColor: `#${randomColor}`
    }}>
      <p>lock</p>
      <p>######</p>
    </div>
  );
}

export default ColorCard;
