import React, { useState, useEffect } from "react";
import axios from "axios";
import pokeapi from "../../../toolkit/api.config";
import { PokeZouzouSprite } from "../../atoms";
import { styled } from "styled-components";

const PokeSprite = styled.img`
  height: 100px;
`;

const PokeZouzou = ({ id, id_twice = 132 }) => {
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
  const sagerLink = () => {
    return `https://images.alexonsager.net/pokemon/fused/${id}/${id}.${id_twice}.png`;
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
      <PokeSprite src={getSprite().back_shiny} />
      <PokeSprite src={sagerLink()} />
      {/* <img src={getSprite().front_shiny} /> */}
    </div>
  ) : (
    <div>Loading..</div>
  );
};

export default PokeZouzou;
