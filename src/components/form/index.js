import React from 'react';
import { Form as UiForm, Input as UiInput, TextArea as UiTextArea } from 'semantic-ui-react';

export { default as connectForm } from './connect-form';
export { Form } from 'semantic-ui-react';

const withHelper = ({ meta, input, label, required, ...rest }) => (
  (Component) => {
    const { touched, error } = meta;
    const showError = touched && !!error;
    return (
      <UiForm.Field error={showError} required={required}>
        <label>{label}</label>
        <Component {...input} {...rest} />
        <small className="helper">{showError && error}</small>
      </UiForm.Field>
    );
  }
);

export const Input = props => withHelper(props)(UiInput);
export const TextArea = props => withHelper(props)(UiTextArea);
