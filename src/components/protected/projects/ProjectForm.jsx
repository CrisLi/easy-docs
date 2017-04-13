import React from 'react';
import { Field } from 'redux-form';
import { Button, Message } from 'semantic-ui-react';
import { Form, Input, TextArea, connectForm } from '../../form';

const validate = (values, form) => {
  const errors = {
    _error: form.error
  };
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

const ProjectForm = ({ handleSubmit, submitting, error, button }) => (
  <Form onSubmit={handleSubmit} loading={submitting} noValidate>
    { error && <Message negative>{error}</Message> }
    <Field name="name" label="Name" component={Input} required autoComplete="off" />
    <Field name="description" label="Description" component={TextArea} />
    <Button disabled={submitting} type="submit" color="green">{button}</Button>
  </Form>
);

export default connectForm({
  form: 'project',
  validate
})(ProjectForm);
