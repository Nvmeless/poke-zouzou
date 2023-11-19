import React from "react";
import styled from "styled-components";
const PokeSprite = styled.img`
  height: ${(props) => props.height}px;
`;
const PokeZouzouSprite = ({ size = "medium", ...props }) => {
  const returnHeight = () => {
    switch (size) {
      case "small":
        return 50;
        break;
      case "medium":
        return 100;
        break;
      default:
        return 100;
        break;
    }
  };
  return (
    <PokeSprite height={returnHeight()} onClick={props.onClick} src={props.src}>
      {props.children}
    </PokeSprite>
  );
};

export default PokeZouzouSprite;
