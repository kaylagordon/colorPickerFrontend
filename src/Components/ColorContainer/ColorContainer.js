import React from 'react';
import './ColorContainer.scss';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

function ColorContainer() {
  return (
    <section class='color-container'>
      <div class='color-card-container'>
        <ColorCard />
        <ColorCard />
        <ColorCard />
        <ColorCard />
        <ColorCard />
      </div>
      <button class='generate-palette-button'>Generate New Palette</button>
    </section>
  );
}

export default ColorContainer;
