import React, { useState } from 'react';
import './ColorCard.scss';
import PropTypes from 'prop-types';

function ColorCard({ id, bgColor }) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  const [ locked, switchLock ] = useState();
     
  return (
    <div className={`color-card color-card${id}`} style={{
      backgroundColor: `#${bgColor}`
    }}>
      <p>lock</p>
      <p>#{(`${bgColor}`).toUpperCase()}</p>
    </div>
  );
};

export default ColorCard;
