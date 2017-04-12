import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { Input, TextArea } from '../../form';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

const ProjectForm = ({ handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit} loading={isSubmitting} noValidate>
    <Field name="name" label="Name" component={Input} required />
    <Field name="description" label="Description" component={TextArea} />
    <Button disabled={isSubmitting} type="submit" color="green">Create</Button>
  </Form>
);

export default reduxForm({
  form: 'project',
  validate
})(ProjectForm);
