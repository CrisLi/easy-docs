import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { Input, TextArea } from '../../form';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

const ProjectForm = ({ handleSubmit, isProcessing, error }) => (
  <Form onSubmit={handleSubmit} loading={isProcessing} noValidate>
    { error && <Message negative>{error}</Message> }
    <Field name="name" label="Name" component={Input} required />
    <Field name="description" label="Description" component={TextArea} />
    <Button disabled={isProcessing} type="submit" color="green">Create</Button>
  </Form>
);

export default reduxForm({
  form: 'project',
  validate
})(ProjectForm);
