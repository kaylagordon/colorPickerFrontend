import React from 'react';
import './Project.scss';
import Palette from '../Palette/Palette';
import PropTypes from 'prop-types';

function Project({ projectInfo }) {
  const { name } = projectInfo;

  return (
    <section>
      <h3>{projectInfo.name}</h3>
      <Palette />
    </section>
  );
}

export default Project;
