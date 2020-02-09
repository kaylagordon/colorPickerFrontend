import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/api';
import { setAllProjects } from '../../actions'
import './ProjectContainer.scss';
import Project from '../Project/Project';
import PropTypes from 'prop-types';

const ProjectContainer = () => {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await apiRequest('projects', 'GET');
      setProjects(response);
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
      {projects.map(project => <Project projectInfo={project} />)}
    </section>
  );
};

export default ProjectContainer;
