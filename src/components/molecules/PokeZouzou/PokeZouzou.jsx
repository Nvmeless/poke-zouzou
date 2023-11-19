import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokedex } from "../../../store";
import { PokeZouzouSprite, PokedexEntrie } from "../../atoms";
const StylePokeZouzouDisplay = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const PokeZouzou = ({
  id,
  id_twice = false,
  canDisplay = false,
  size = "medium",
  action = (e) => {},
}) => {
  const dispatch = useDispatch();
  const pokedex = useSelector((state) => {
    return state.pokedex;
  });
  const [displayPokeParents, setDisplayPokeParents] = useState(false);
  const [success, setSuccess] = useState(pokedex?.status);

  useEffect(() => {
    setSuccess(pokedex.pokedex[id - 1]?.status);
  }, [pokedex.pokedex[id - 1]?.status, id]);

  useEffect(() => {
    dispatch(fetchPokedex(id));
    if (id_twice) {
      dispatch(fetchPokedex(id_twice));
    }
  }, [id, id_twice]);
  const showParents = () => {
    action();
    if (canDisplay) {
      setDisplayPokeParents(!displayPokeParents);
    }
  };
  const sagerLink = () => {
    return `https://images.alexonsager.net/pokemon/fused/${id}/${id}.${id_twice}.png`;
  };

  const pokedexYOffset = 5;
  const pokedexXOffset = 5;

  return success === "succeed" ? (
    <div>
      <StylePokeZouzouDisplay>
        {displayPokeParents ? (
          <PokedexEntrie
            pokedex={pokedex}
            id={id}
            yOffset={0 - pokedexYOffset}
            size={size}
          ></PokedexEntrie>
        ) : (
          <></>
        )}
        <PokeZouzouSprite onClick={showParents} src={sagerLink()} size={size} />
        {displayPokeParents ? (
          <PokedexEntrie
            pokedex={pokedex}
            id={id_twice}
            yOffset={pokedexYOffset}
            size={size}
          ></PokedexEntrie>
        ) : (
          <></>
        )}
      </StylePokeZouzouDisplay>
    </div>
  ) : (
    <div>Loading..</div>
  );
};

export default PokeZouzou;
