import React from 'react';
import './ColorContainer.scss';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

function ColorContainer() {
  return (
    <section class='color-container'>
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </section>
  );
}

export default ColorContainer;
