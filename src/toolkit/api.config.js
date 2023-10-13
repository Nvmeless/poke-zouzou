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

export default pokeapi;
