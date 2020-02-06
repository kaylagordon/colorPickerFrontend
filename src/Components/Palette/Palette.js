import React from 'react';
import './Palette.scss';
import PropTypes from 'prop-types';

function Palette() {
  return (
    <section>
      <p>Palette 1</p>
      <div class='color1'></div>
      <div class='color2'></div>
      <div class='color3'></div>
      <div class='color4'></div>
      <div class='color5'></div>
      <button class='delete-palette-button'>X</button>
    </section>
  );
}

export default Palette;
