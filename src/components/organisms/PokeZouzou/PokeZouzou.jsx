import React, { useState, useEffect } from "react";
import axios from "axios";
import pokeapi from "../../../toolkit/api.config";
import { PokeZouzouSprite } from "../../atoms";
const PokeZouzou = ({ id }) => {
  const [DataIsLoaded, setDataIsLoaded] = useState(false);
  const [lastCall, setLastCall] = useState({});
  const get = () => {
    axios(pokeapi("get", `pokemon/${id}`))
      .then((response) => {
        setDataIsLoaded(true);
        setLastCall(response);
        // console.log(response);
      })
      .catch((err) => {
        setDataIsLoaded(true);

        console.error(err);
      });
  };
  useEffect(() => {
    get();
  }, []);
  const getSprite = () => {
    if (DataIsLoaded && 200 == lastCall.status) {
      return lastCall.data.sprites;
    }
  };
  return DataIsLoaded ? (
    <div>
      <img src={getSprite().back_shiny} />
      <img src={getSprite().front_shiny} />
    </div>
  ) : (
    <div>Loading..</div>
  );
};

export default PokeZouzou;
