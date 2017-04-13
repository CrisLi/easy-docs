import { CALL_API } from 'redux-api-middleware';
import qs from 'querystring';

// if you need some query params, don't add them into the endpoint, use 'query' config
const normalizeOptions = (options) => {
  const { query, endpoint, ...rest } = options;
  if (query && endpoint) {
    return {
      ...rest,
      endpoint: `${endpoint.replace(/\?*/, '')}/?${qs.stringify({ ...query })}`
    };
  }
  return options;
};

export const create = name => options => ({
  [CALL_API]: {
    headers: { 'Content-Type': 'application/json' },
    types: [`${name}_REQUEST`, `${name}_SUCCESS`, `${name}_FAILURE`],
    ...normalizeOptions(options)
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
