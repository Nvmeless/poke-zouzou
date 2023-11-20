import React from "react";
import { BattleTeamInventory } from "../../molecules";
import styled from "styled-components";

const StyledBattleContainer = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 2.2fr 0.4fr;
  grid-template-rows: 0.4fr 2.1fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    "BattleTeam1 Battle BattleTeam2"
    ". . .";
  width: 100vw;
  height: 60vh;
`;
const StyledBattle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.6fr 1.8fr 0.6fr;
  gap: 0px 0px;
  grid-template-areas:
    "AttackMasterCard DefenseMasterCard"
    "Attack Defense"
    "AttackStats DefenseStats";
  grid-area: Battle;
`;
const StyledGridContainer = styled.div`
  grid-area: ${(props) => props.gridName};
`;

const Battle = ({ attack, oponent, ...props }) => {
  return (
    <StyledBattleContainer className="nes-container ">
      <StyledBattle>
        <StyledGridContainer gridName="Attack"></StyledGridContainer>
        <StyledGridContainer gridName="Defense"></StyledGridContainer>
        <StyledGridContainer gridName="DefenseMasterCard"></StyledGridContainer>
        <StyledGridContainer gridName="AttackMasterCard"></StyledGridContainer>
        <StyledGridContainer gridName="AttackStats"></StyledGridContainer>
        <StyledGridContainer gridName="DefenseStats"></StyledGridContainer>
        <StyledGridContainer gridName="DefenseStats"></StyledGridContainer>
      </StyledBattle>
      <StyledGridContainer gridName="BattleTeam1">
        <BattleTeamInventory
          items={attack.teams.monsters}
        ></BattleTeamInventory>
      </StyledGridContainer>
      <StyledGridContainer gridName="BattleTeam2">
        <BattleTeamInventory
          items={oponent.teams.monsters}
        ></BattleTeamInventory>
      </StyledGridContainer>
    </StyledBattleContainer>
  );
};

export default Battle;
