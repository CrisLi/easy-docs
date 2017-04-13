import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { Grid, Segment, Header } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';
import { project as actions } from '../../../actions';

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(project) {
    return this.props.actions.create(project)
      .then((action) => {
        if (action.error) {
          throw new SubmissionError({ _error: this.props.error.message });
        }
      });
  }

  render() {
    const { isProcessing } = this.props;
    return (
      <Grid>
        <Grid.Column computer={8} mobile={16}>
          <Segment>
            <Header as="h3">New Project</Header>
            <ProjectForm onSubmit={this.onSubmit} isProcessing={isProcessing} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(state => (state.projects), actions)(NewProject);
