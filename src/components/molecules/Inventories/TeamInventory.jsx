import React, { useState } from "react";
import styled from "styled-components";
import { PokeZouzouSprite, Text } from "../../atoms";
import PokeZouzou from "../PokeZouzou/PokeZouzou";

const StyledInventoryContainer = styled.div`
  height: 50vh;
  width: 7vw;
  ${"" /* position: absolute; */}
  ${"" /* top: 25vh; */}
  ${"" /* left: 0; */}
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "."
    "."
    ".";
`;
const StyledInventoryItemContainer = styled.div``;
const TeamInventory = ({ items = [], ...props }) => {
  const [displayName, setDisplayName] = useState(false);
  const [itemsToDisplay, setitemsToDisplay] = useState(items.slice(0, 3));
  return (
    <StyledInventoryContainer className="nes-container">
      {itemsToDisplay.map((item, i) => {
        return (
          <StyledInventoryItemContainer key={i}>
            <PokeZouzou
              id={item.pokedex.pokemon_id_first}
              id_twice={item.pokedex.pokemon_id_second}
              size="small"
            />
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
