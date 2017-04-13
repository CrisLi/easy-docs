import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';
import { project as actions } from '../../../actions';

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
  }

  onSubmit(project) {
    return this.props.actions.create(project);
  }

  onSubmitSuccess() {
    this.props.history.push('/projects');
  }

  render() {
    return (
      <Grid>
        <Grid.Column computer={8} mobile={16}>
          <Segment>
            <Header as="h3">New Project</Header>
            <ProjectForm
              button="Create"
              onSubmit={this.onSubmit}
              onSubmitSuccess={this.onSubmitSuccess}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(state => (state.projects), actions)(NewProject);
