import React from "react";
import { PokeZouzouSprite } from "../../atoms";
const PokedexEntrie = ({ id, pokedex }) => {
  return (
    <div>
      {pokedex?.pokedex[id - 1]?.id}
      <PokeZouzouSprite src={pokedex?.pokedex[id - 1].sprites?.back_default} />
      <PokeZouzouSprite src={pokedex?.pokedex[id - 1].sprites?.front_default} />
      {pokedex?.pokedex[id - 1].name}
    </div>
  );
};

export default PokedexEntrie;
