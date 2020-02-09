import React, { useState, useEffect } from 'react';
import PaletteForm from '../PaletteForm/PaletteForm';
import './ColorContainer.scss';
import ColorCard from '../ColorCard/ColorCard';
import PropTypes from 'prop-types';

export const ColorContainer = () => {

  const [bgColor1, setBGColor1] = useState({});
  const [bgColor2, setBGColor2] = useState({});
  const [bgColor3, setBGColor3] = useState({});
  const [bgColor4, setBGColor4] = useState({});
  const [bgColor5, setBGColor5] = useState({});

  const currentPalette = {
    bgColor1,
    bgColor2,
    bgColor3,
    bgColor4,
    bgColor5
  };

  const generatePalette = () => {
    setBGColor1({
      color: Math.floor(Math.random()*16777215).toString(16),
      locked: false
    });
    setBGColor2({
      color: Math.floor(Math.random()*16777215).toString(16),
      locked: false
    });
    setBGColor3({
      color: Math.floor(Math.random()*16777215).toString(16),
      locked: false
    });
    setBGColor4({
      color: Math.floor(Math.random()*16777215).toString(16),
      locked: false
    });
    setBGColor5({
      color: Math.floor(Math.random()*16777215).toString(16),
      locked: false
    });
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <section className='color-container'>
      <div className='color-card-container'>
        <ColorCard id={1} bgColor={bgColor1}/>
        <ColorCard id={2} bgColor={bgColor2}/>
        <ColorCard id={3} bgColor={bgColor3}/>
        <ColorCard id={4} bgColor={bgColor4}/>
        <ColorCard id={5} bgColor={bgColor5}/>
      </div>
      <button
        type='button'
        className='generate-palette-button'
        onClick={generatePalette}>Generate New Palette
      </button>
      <PaletteForm currentPalette={currentPalette} />
    </section>
  );
};

export default ColorContainer;
