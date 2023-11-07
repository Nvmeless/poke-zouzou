import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokedex } from "../../../store";
import { PokeZouzouSprite } from "../../atoms";
import { PokedexEntrie } from "../../molecules";

const PokeZouzou = ({ id, id_twice = false }) => {
  const dispatch = useDispatch();

  const pokedex = useSelector((state) => {
    return state.pokedex;
  });
  const [success, setSuccess] = useState(pokedex.status);

  useEffect(() => {
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
      {/* {pokedex?.pokedex[id - 1]?.id}
      <PokeZouzouSprite src={pokedex?.pokedex[id - 1].sprites?.back_default} />
      <PokeZouzouSprite src={pokedex?.pokedex[id - 1].sprites?.front_default} />
      {pokedex?.pokedex[id - 1].name} */}
      <PokedexEntrie pokedex={pokedex} id={id}></PokedexEntrie>
      <PokeZouzouSprite src={sagerLink()} />
      <PokedexEntrie pokedex={pokedex} id={id_twice}></PokedexEntrie>
    </div>
  ) : (
    <div>Loading..</div>
  );
};

export default PokeZouzou;
