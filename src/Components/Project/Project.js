import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Project.scss';
import Palette from '../Palette/Palette';
import PropTypes from 'prop-types';

function Project({ projectInfo }) {
  const { name, id } = projectInfo;
  const palettes = useSelector(state => state.palettes);

  const displayPalettes = () => {
    const projectPalettes = palettes.filter(palette => parseInt(palette.project_id) === id);

    return projectPalettes.map(palette => <Palette palette={palette}/>)
  };


  return (
    <section>
      <h3>{projectInfo.name}</h3>
      {displayPalettes()}
    </section>
  );
}

export default Project;
