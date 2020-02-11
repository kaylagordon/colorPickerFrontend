import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api';
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

  return (
    <section>
      <h3>{projectInfo.name}</h3>
      {displayPalettes()}
    </section>
  );
};

export default Project;
