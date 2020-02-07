import React from 'react';
import './ProjectForm.scss';
import PropTypes from 'prop-types';

function ProjectForm() {
  return (
    <form className='project-form'>
      <p>Create New Project:</p>
      <input type='text' />
      <button className='submit-project-button'>Save Project</button>
    </form>
  );
}

export default ProjectForm;
