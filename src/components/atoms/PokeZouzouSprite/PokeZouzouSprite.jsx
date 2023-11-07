import React from "react";
import styled from "styled-components";
const PokeSprite = styled.img`
  height: 100px;
`;
const PokeZouzouSprite = (props) => {
  return <PokeSprite src={props.src}>{props.children}</PokeSprite>;
};

export default PokeZouzouSprite;
