import React, { useState } from 'react';
import './ColorCard.scss';
import PropTypes from 'prop-types';

function ColorCard({ cardColor, lockColor }) {
  const [ locked, switchLock ] = useState();

  return (
    <div className={`color-card color-card${cardColor.id}`} style={{
      backgroundColor: `#${cardColor.color}`
    }}>
      <button className='lock-button' onClick={lockColor(cardColor.id)}>lock</button>
      <p>#{(`${cardColor.color}`).toUpperCase()}</p>
    </div>
  );
};

export default ColorCard;
