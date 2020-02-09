import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api'; 
import { addProject } from '../../actions/index';
import './ProjectForm.scss';
import PropTypes from 'prop-types';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest('projects', 'POST', { name: projectName });
      dispatch(addProject(response.name, response.id));
    } catch (error) {
      console.log(error);
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
