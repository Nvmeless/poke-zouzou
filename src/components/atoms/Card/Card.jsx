import React from "react";
import { styled } from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) =>
    props.color !== "toto" ? props.theme.color.main : "violet"};
`;

const Card = () => {
  return <StyledCard color="tto">Card</StyledCard>;
};

export default Card;
