import React from 'react';
import './Palette.scss';
import PropTypes from 'prop-types';

function Palette({ palette }) {
  return (
    <section className='saved-palette-container'>
      <p>{palette.name}:</p>
      <div className='color1'>x</div>
      <div className='color2'>x</div>
      <div className='color3'>x</div>
      <div className='color4'>x</div>
      <div className='color5'>x</div>
      <button className='delete-palette-button'>X</button>
    </section>
  );
}

export default Palette;
