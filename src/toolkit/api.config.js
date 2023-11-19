const pokeapi = (method, path) => {
  const config = {
    baseUrl: "https://pokeapi.co/api/v2/",
    path: path,
    token: null,
  };

  let url = () => {
    return config.baseUrl + config.path;
  };

  let headers = () => {
    return config.token
      ? {
          Authorization: `Bearer ${config.token}`,
        }
      : {};
  };

  return {
    method: method,
    url: url(),
    headers: headers(),
  };
};
const apiZouzoumon = (method, path, data, token) => {
  const config = {
    baseUrl: "http://127.0.0.1:44213/api/",
    path: path,
    token: token,
  };

  let url = () => {
    return config.baseUrl + config.path;
  };

  let headers = () => {
    return config.token
      ? {
          Authorization: `Bearer ${config.token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        };
  };

  return {
    method: method,
    url: url(),
    headers: headers(),
    data: data,
  };
};
export { apiZouzoumon };
export default pokeapi;
