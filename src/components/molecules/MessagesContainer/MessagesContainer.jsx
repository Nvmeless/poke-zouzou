import React, { useState, useEffect } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
const StyledGeneralMessage = styled.div`
  position: absolute;
  bottom: 0;
  padding: 2rem;
  width: 50%;
`;
const MessagesContainer = ({ content, ...props }) => {
  return (
    <StyledGeneralMessage>
      <div className="nes-container with-title is-centered">
        {/* <p className="title">{props.title}</p> */}
        <p>{content}</p>
      </div>
    </StyledGeneralMessage>
  );
};

export default MessagesContainer;
