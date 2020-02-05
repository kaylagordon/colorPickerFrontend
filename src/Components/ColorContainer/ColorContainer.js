import React from 'react';
import './ColorContainer.scss';
import ColorCard from '../ColorCard/ColorCard';

function ColorContainer() {
  return (
    <section>
    this is the color container
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </section>
  );
}

export default ColorContainer;
