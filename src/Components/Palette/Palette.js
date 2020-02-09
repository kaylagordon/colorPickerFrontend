import React from 'react';
import './Palette.scss';
import PropTypes from 'prop-types';

function Palette() {
  return (
    <section>
      <p>Palette 1</p>
      <div className='color1'></div>
      <div className='color2'></div>
      <div className='color3'></div>
      <div className='color4'></div>
      <div className='color5'></div>
      <button className='delete-palette-button'>X</button>
    </section>
  );
}

export default Palette;
