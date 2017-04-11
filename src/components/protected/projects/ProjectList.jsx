import React from 'react';
import { Button } from 'semantic-ui-react';

const ProjectList = ({ history }) => {
  const goToNew = () => {
    history.push('/projects/new');
  };
  return (
    <div>
      <Button color="blue" onClick={goToNew}>New Project</Button>
      <div>Project List</div>
    </div>
  );
};

export default ProjectList;
