import React, { useEffect, useState } from "react";
import Input from "../../atoms/Input/Input";
import { Button } from "../../atoms";
import { LoginForm } from "../../molecules";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck } from "../../../store";
import { useNavigate } from "react-router-dom";
const StyledLoginContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => {
    if (state.user.auth) {
      if (state.user.auth) {
        return navigate("/profile");
      }
    }
    return state.user;
  });

  return (
    <StyledLoginContainerPage>
      <LoginForm></LoginForm>
    </StyledLoginContainerPage>
  );
};

export default Login;
