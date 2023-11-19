import React, { useState } from "react";
import styled from "styled-components";
import { PokeZouzouSprite, Text } from "../../atoms";
import PokeZouzou from "../PokeZouzou/PokeZouzou";
import { MonsterController } from "../../organisms";

const StyledInventoryContainer = styled.div`
margin:0;
padding:0.5rem;
  height: 50vh;
  width: 7vw;
  ${"" /* position: absolute; */}
  ${"" /* top: 25vh; */}
  ${"" /* left: 0; */}
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "."
    "."
    ".";
`;
const StyledInventoryItemContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;
const TeamInventory = ({ items = [], ...props }) => {
  const [displayName, setDisplayName] = useState(false);
  const [itemsToDisplay, setitemsToDisplay] = useState(items.slice(0, 3));
  return (
    <StyledInventoryContainer className="nes-container">
      {itemsToDisplay.map((item, i) => {
        return (
          <StyledInventoryItemContainer key={i}>
            <MonsterController monster={item} size="small" />
            {displayName ?? (
              <Text>
                {item.name} levle:{item.level}
              </Text>
            )}
          </StyledInventoryItemContainer>
        );
      })}
    </StyledInventoryContainer>
  );
};

export default TeamInventory;
