import React from 'react';
import { Form as UiForm, Input as UiInput, TextArea as UiTextArea } from 'semantic-ui-react';

export const Input = ({ meta, input, label, ...rest }) => {
  const { touched, error } = meta;
  const showError = touched && !!error;
  return (
    <Form.Field error={showError} {...rest}>
      <label>{label}</label>
      <UiInput {...input} />
      <small className="helper">{showError && error}</small>
    </Form.Field>
  );
};

export const TextArea = ({ meta, input, label, ...rest }) => {
  const { touched, error } = meta;
  const showError = touched && !!error;
  return (
    <Form.Field error={showError} {...rest}>
      <label>{label}</label>
      <UiTextArea {...input} />
      <small className="helper">{showError && error}</small>
    </Form.Field>
  );
};

export const Form = UiForm;
