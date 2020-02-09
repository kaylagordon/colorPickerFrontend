import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../utils/api'; 
import './ProjectForm.scss';
import PropTypes from 'prop-types';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest('projects', 'POST', { name: projectName });
      console.log(await response.json());
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form className='project-form' onSubmit={(e) => handleSubmit(e)}>
      <p>Create New Project:</p>
      <input 
        type='text' 
        onChange={(e) => setProjectName(e.target.value)}/>
      <button 
        type='submit'
        className='submit-project-button'>Save Project
      </button>
    </form>
  );
}

export default ProjectForm;
