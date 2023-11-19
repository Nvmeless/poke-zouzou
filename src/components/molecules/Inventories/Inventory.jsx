import React from "react";
import styled from "styled-components";

const StyledInventoryContainer = styled.div``;
const StyledInventoryItemContainer = styled.div``;
const Inventory = ({ items = [], ...props }) => {
  return (
    <StyledInventoryContainer className="nes-container">
      {items.map((item) => {
        return (
          <StyledInventoryItemContainer>
            {item.name}
          </StyledInventoryItemContainer>
        );
      })}
    </StyledInventoryContainer>
  );
};
export default Inventory;
