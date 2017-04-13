import React from 'react';
import { reduxForm, SubmissionError } from 'redux-form';

export default config => (FormComponent) => {
  const ReduxFrom = reduxForm({
    ...config
  })(FormComponent);

  const wrappedSubmit = onSubmit => (values) => {
    const result = onSubmit(values);
    if (typeof result.then === 'function') {
      return result.then((action) => {
        const { error, payload } = action;
        if (error) {
          throw new SubmissionError({ _error: payload.response.message });
        }
        return action;
      });
    }
    return result;
  };

  return ({ onSubmit, ...props }) => (
    <ReduxFrom onSubmit={wrappedSubmit(onSubmit)} {...props} />
  );
};
