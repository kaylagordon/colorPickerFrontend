import React, { useState } from 'react';
import './ColorCard.scss';
import PropTypes from 'prop-types';

function ColorCard({ id }) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  //set global state to randomColor
  const [ locked, switchLock ] = useState();

  return (
    <div className={`color-card color-card${id}`} style={{
      backgroundColor: `#${randomColor}`
    }}>
      <p>lock</p>
      <p>#{randomColor.toUpperCase()}</p>
    </div>
  );
}

export default ColorCard;
