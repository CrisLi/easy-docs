import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(project) {
    setImmediate(() => (console.log(this.props)));
    console.log(project);
  }

  render() {
    return (
      <Grid>
        <Grid.Column computer={8} mobile={16}>
          <Segment>
            <Header as="h3">New Project</Header>
            <ProjectForm onSubmit={this.onSubmit} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default NewProject;
