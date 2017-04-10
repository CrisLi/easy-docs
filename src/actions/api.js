import { CALL_API } from 'redux-api-middleware';

export const create = name => config => ({
  [CALL_API]: {
    headers: { 'Content-Type': 'application/json' },
    types: [`${name}_REQUEST`, `${name}_SUCCESS`, `${name}_FAILURE`],
    ...config
  }
});

export const get = name => options => (
  create(name)({
    ...options,
    method: 'GET'
  })
);

export const post = name => (body, options) => (
  create(name)({
    body: JSON.stringify(body),
    ...options,
    method: 'POST'
  })
);

export const put = name => (body, options) => (
  create(name)({
    body: JSON.stringify(body),
    ...options,
    method: 'PUT'
  })
);

export const del = name => options => (
  create(name)({
    ...options,
    method: 'DELETE'
  })
);
