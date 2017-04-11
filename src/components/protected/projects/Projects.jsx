import React from 'react';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import NewProject from './NewProject';

const Projects = () => (
  <div>
    <Route exact path="/projects" component={ProjectList} />
    <Route path="/projects/new" component={NewProject} />
  </div>
);

export default Projects;
