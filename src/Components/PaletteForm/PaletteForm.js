import React, { useState, useEffect } from 'react';
import './PaletteForm.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addPalette } from '../../actions/index';

function PaletteForm({ currentPalette }) {

  const [paletteName, setPaletteName] = useState('');
  const [selectedProject, setSelectedProject] = useState('1');

  const savePalette = (event) => {
    let palette =  {
      project_id: selectedProject,
      color1: currentPalette.color1.color,
      color2: currentPalette.color2.color,
      color3: currentPalette.color3.color,
      color4: currentPalette.color4.color,
      color5: currentPalette.color5.color,
      name: paletteName
    };

    //post


    //save to global store


  }

  const changeSelection = event => {
    setSelectedProject(event.target.value);
  }

  return (
    <form className='palette-form'>
      <select onChange={event => changeSelection(event)}>
        <option id={1} value={1}>Project 1</option>
        <option id={2} value={2}>Project 2</option>
      </select>
      <input
        type='text'
        onChange={(e) => setPaletteName(e.target.value)}/>
      <button
        type='button'
        className='submit-palette'
        onClick={savePalette}
      >Save Palette
      </button>
    </form>
  );
}

export default PaletteForm;
