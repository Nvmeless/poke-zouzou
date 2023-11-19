import React from "react";
import PokeZouzouSprite from "../PokeZouzouSprite/PokeZouzouSprite";
import styled from "styled-components";
const StyledPokedexEntry = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  transform: translate(
    ${(props) => props.yOffset}rem,
    ${(props) => props.xOffset}rem
  );
`;
const PokedexEntrie = ({
  id,
  pokedex,
  yOffset = 0,
  xOffset = -1.5,
  size = "medium",
}) => {
  return (
    <StyledPokedexEntry yOffset={yOffset} xOffset={xOffset}>
      {pokedex?.pokedex[id - 1]?.id}
      <div>
        {/* <PokeZouzouSprite src={pokedex?.pokedex[id - 1].sprites?.back_default} /> */}
        <PokeZouzouSprite
          size={size}
          src={pokedex?.pokedex[id - 1].sprites?.front_default}
        />
      </div>
      {pokedex?.pokedex[id - 1].name}
    </StyledPokedexEntry>
  );
};

export default PokedexEntrie;
