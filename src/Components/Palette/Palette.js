import React from 'react';
import './Palette.scss';
import PropTypes from 'prop-types';
import { deletePalette } from '../../actions';
import { useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api';

function Palette({ palette }) {
  const dispatch = useDispatch();

  const removePalette = () => {
    dispatch(deletePalette(palette.id));
    const body = {
      id: palette.id
    }
    apiRequest('palettes', 'DELETE', body);
  };

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
      <button className='delete-palette-button' onClick={removePalette}>X</button>
    </section>
  );
}

export default Palette;
