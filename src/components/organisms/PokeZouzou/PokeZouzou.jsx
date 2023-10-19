import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokedex } from "../../../store";

const PokeSprite = styled.img`
  height: 100px;
`;

const PokeZouzou = ({ id, id_twice = false }) => {
  const dispatch = useDispatch();

  const pokedex = useSelector((state) => {
    console.log(state);
    return state.pokedex;
  });
  const [success, setSuccess] = useState(pokedex.status);

  useEffect(() => {
    // console.log("POKEDEX", pokedex.pokedex[id]);
    setSuccess(pokedex.pokedex[id - 1].status);
  }, [pokedex.pokedex[id - 1].status, id]);

  useEffect(() => {
    dispatch(fetchPokedex(id));
    if (id_twice) {
      dispatch(fetchPokedex(id_twice));
    }
  }, [id, id_twice]);

  const sagerLink = () => {
    return `https://images.alexonsager.net/pokemon/fused/${id}/${id}.${id_twice}.png`;
  };

  return success === "succeed" ? (
    <div>
      {pokedex?.pokedex[id - 1]?.id}
      <PokeSprite src={pokedex?.pokedex[id - 1].sprites?.back_default} />
      <PokeSprite src={pokedex?.pokedex[id - 1].sprites?.front_default} />
      {pokedex?.pokedex[id - 1].name}
      <PokeSprite src={sagerLink()} />
    </div>
  ) : (
    <div>Loading..</div>
  );
};

export default PokeZouzou;
