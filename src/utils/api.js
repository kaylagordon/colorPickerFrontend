export const apiRequest = async (urlPath, method, data = null) => {
  let options;
  const url = process.env.REACT_APP_BACKEND_URL + '/api/v1' + urlPath;

  switch (method) {
    case 'DELETE':
      options = null;
      break;
    case 'GET':
      options = data;
      break;
    default:
      options = {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      };
  }

  const response = await fetch(url, options);

  if (response.status === 204) return 'success';

  const json = await response.json();

  if (response.ok) return json;
  throw Error(json);
};