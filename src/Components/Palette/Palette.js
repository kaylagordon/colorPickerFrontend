import React from 'react';
import './Palette.scss';
import PropTypes from 'prop-types';

function Palette({ palette }) {
  return (
    <section className='saved-palette-container'>
      <p>{palette.name}:</p>
      <div className='saved-palette-color' style={{
        backgroundColor: `#${palette.color1}`
      }}></div>
      <div className='saved-palette-color' style={{
        backgroundColor: `#${palette.color2}`
      }}></div>
      <div className='saved-palette-color' style={{
        backgroundColor: `#${palette.color3}`
      }}></div>
      <div className='saved-palette-color' style={{
        backgroundColor: `#${palette.color4}`
      }}></div>
      <div className='saved-palette-color' style={{
        backgroundColor: `#${palette.color5}`
      }}></div>
      <button className='delete-palette-button'>X</button>
    </section>
  );
}

export default Palette;
