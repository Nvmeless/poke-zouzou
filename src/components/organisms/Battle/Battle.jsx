import React from "react";
import { BattleTeamInventory } from "../../molecules";
import styled from "styled-components";

const StyledBattleContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 60vh;
  justify-content: space-around;
`;
const Battle = ({ attack, oponent, ...props }) => {
  return (
    <StyledBattleContainer className="nes-container ">
      <BattleTeamInventory items={attack.teams.monsters}></BattleTeamInventory>
      <BattleTeamInventory items={oponent.teams.monsters}></BattleTeamInventory>
    </StyledBattleContainer>
  );
};

export default Battle;
