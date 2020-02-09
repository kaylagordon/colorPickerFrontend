import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api';
import { setAllProjects } from '../../actions'
import './ProjectContainer.scss';
import Project from '../Project/Project';
import PropTypes from 'prop-types';

const ProjectContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const displayedProjects = useSelector(state => state.projects);

  const fetchProjects = async () => {
    try {
      const response = await apiRequest('projects', 'GET');
      dispatch(setAllProjects(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  };

  return (
    <section>
      {displayedProjects.reverse().map(project => <Project key={project.id} projectInfo={project} />)}
    </section>
  );
};

export default ProjectContainer;
