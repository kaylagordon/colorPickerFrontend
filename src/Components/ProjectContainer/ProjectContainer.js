import React from 'react';
import './ProjectContainer.scss';
import Project from '../Project/Project';
import PropTypes from 'prop-types';

function ProjectContainer() {
  return (
    <section>
    this is a project container
      <Project />
      <Project />
    </section>
  );
}

export default ProjectContainer;
