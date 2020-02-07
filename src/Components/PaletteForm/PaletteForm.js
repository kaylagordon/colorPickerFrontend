import React from 'react';
import './PaletteForm.scss';
import PropTypes from 'prop-types';

function PaletteForm() {
  return (
    <form class='palette-form'>
      <select>
        <option value="project1">Project 1</option>
      </select>
      <input type='text' />
      <button class='submit-palette'>Save Palette</button>
    </form>
  );
}

export default PaletteForm;
