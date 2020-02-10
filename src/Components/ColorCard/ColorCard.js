import React, { useState } from 'react';
import './ColorCard.scss';
import PropTypes from 'prop-types';

function ColorCard({ cardColor, lockColor }) {
  const [ locked, switchLock ] = useState();

  const showLockStatus = () => {
    if (cardColor.locked) {
      return `unlock`;
    } else {
      return `lock`;
    };
  };

  return (
    <div className={`color-card color-card${cardColor.id}`} style={{
      backgroundColor: `#${cardColor.color}`
    }}>
      <button className='lock-button' onClick={event => lockColor(event, cardColor.id)}>{showLockStatus()}</button>
      <p>#{(`${cardColor.color}`).toUpperCase()}</p>
    </div>
  );
};

export default ColorCard;
