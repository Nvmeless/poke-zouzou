import React, { useState } from "react";
import { PokeZouzou } from "../../molecules";
import styled from "styled-components";
const StyledMonsterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyledHealthBarContainer = styled.div`
  height: 10px;
  width: 80%;
  background-color: black;
`;
const StyledHealthBar = styled.div`
  background-color: ${(props) => {
    if (props.percentHp > 50) {
      return "green";
    } else if (props.percentHp > 10) {
      return "orange";
    } else return "red";
  }};
  width: ${(props) => props.percentHp}%;
  height: 100%;
`;
const MonsterController = ({ monster, size = "medium" }) => {
  const [pv, setPv] = useState(monster.pv);

  return (
    <StyledMonsterContainer>
      <PokeZouzou
        id={monster.pokedex.pokemon_id_first}
        id_twice={monster.pokedex.pokemon_id_second}
        size={size}
      />
      <StyledHealthBarContainer>
        <StyledHealthBar
          percentHp={(pv * 100) / monster.pv_max}
        ></StyledHealthBar>
      </StyledHealthBarContainer>
      {pv}/{monster.pv_max}
    </StyledMonsterContainer>
  );
};

export default MonsterController;
