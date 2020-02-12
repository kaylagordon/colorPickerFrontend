import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api';
import { deleteProject } from '../../actions/index';
import './Project.scss';
import Palette from '../Palette/Palette';
import PropTypes from 'prop-types';
import { setAllPalettes } from '../../actions'

function Project({ projectInfo, palettes }) {
  const dispatch = useDispatch();
  const { name, id } = projectInfo;

  const displayPalettes = () => {
    const projectPalettes = palettes.filter(palette => parseInt(palette.project_id) === id);

    if (!projectPalettes.length) {
      return <p>No palettes</p>;
    }
    return projectPalettes.map(palette => <Palette palette={palette}/>)
  };

  const handleClick = async () => {
    const body = projectInfo;
    try {
      const response = await apiRequest(`projects`, 'DELETE', body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    dispatch(deleteProject(body.id));
  }

  return (
    <section>
      <h3>{name}</h3>
      <button 
        className='delete-palette-button'
        onClick={handleClick}>X
      </button>
      {displayPalettes()}
    </section>
  );
};

export default Project;
