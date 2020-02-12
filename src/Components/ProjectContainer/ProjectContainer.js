import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api';
import { setAllProjects, setAllPalettes } from '../../actions';
import './ProjectContainer.scss';
import Project from '../Project/Project';
import PropTypes from 'prop-types';

const ProjectContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const displayedProjects = useSelector(state => state.projects);
  const palettes = useSelector(state => state.palettes);

  const fetchProjects = async () => {
    try {
      const projects = await apiRequest('projects', 'GET');
      dispatch(setAllProjects(projects.projects));
    } catch (error) {
      console.log(error);
    };
  };

  const fetchPalettes = async () => {
    try {
      const palettes = await apiRequest('palettes', 'GET');
      dispatch(setAllPalettes(palettes.palettes));
      setLoading(false);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    fetchProjects();
    fetchPalettes();
  }, []);

  const displayProjects = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return displayedProjects.sort((a, b) => b.id - a.id).map(project => <Project key={project.id} projectInfo={project} palettes={palettes}/>)
    };
  };

  return (
    <section className='projects-container'>
      {displayProjects()}
    </section>
  );
};

export default ProjectContainer;
