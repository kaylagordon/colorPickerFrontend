import React, { useState, useEffect } from 'react';
import './PaletteForm.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addPalette } from '../../actions/index';

function PaletteForm({ currentPalette }) {

  const [paletteName, setPaletteName] = useState('');

  const handleSubmit = () => {
    const chosenPalette = {
      test: 'test'
    }
  }

  const projectsToDisplay = useSelector(state => state.projects);

  return (
    <form className='palette-form' onSubmit={handleSubmit}>
      <select >
        <option id={'test'} value="test!!!!!!!">Project 1</option>
        {projectsToDisplay.map(project => {
          return (
            <option id={project.id}>{project.name}</option>
          )
        })}
      </select>
      <input 
        type='text' 
        onChange={(e) => setPaletteName(e.target.value)}/>
      <button 
        type='button'  
        className='submit-palette'>Save Palette
      </button>
    </form>
  );
}

export default PaletteForm;
