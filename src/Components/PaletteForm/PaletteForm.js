import React from 'react';
import './PaletteForm.scss';
import PropTypes from 'prop-types';

function PaletteForm() {
  return (
    <form className='palette-form'>
      <select>
        <option value="project1">Project 1</option>
      </select>
      <input type='text' />
      <button className='submit-palette'>Save Palette</button>
    </form>
  );
}

export default PaletteForm;
