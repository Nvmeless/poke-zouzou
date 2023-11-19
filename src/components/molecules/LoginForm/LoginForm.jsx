import React, { useState, useEffect } from "react";
import { Input, Button } from "../../atoms";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addMessage, getProfile, loginCheck } from "../../../store";

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [error, setError] = useState(false);
  const [logged, setLogged] = useState(false);
  const [auth, setAuth] = useState(false);
  const user = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    if (user.logged !== logged && user.logged) {
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: "Connecté !",
        })
      );
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: "Connecté !",
        })
      );
      setLogged(user.logged);
      dispatch(getProfile({ token: user.token }));
    }
    if (user.auth !== auth && user.auth) {
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: "Authentifié, Bon jeu !",
        })
      );
      setAuth(user.auth);
    }

    return () => {};
  }, [user, logged, auth]);
  // useEffect(() => {
  //   if (user.logged !== logged && user.logged) {
  //     dispatch(
  //       addMessage({
  //         from: "security",
  //         title: "Security Agent",
  //         content: "Zobito !",
  //       })
  //     );
  //     dispatch(
  //       addMessage({
  //         from: "security",
  //         title: "Security Agent",
  //         content: "Zobito !",
  //       })
  //     );
  //     setLogged(user.logged);
  //     dispatch(getProfile({ token: user.token }));
  //   }

  //   return () => {};
  // }, [user, auth]);
  const changeUsernameInput = (e, i) => {
    if (username !== e.target.value) {
      setUsername(e.target.value);
    }
  };
  const validate = (e, i) => {
    dispatch(loginCheck({ username: username, password: password }));
  };
  const changePasswordInput = (e, i) => {
    if (password !== e.target.value) {
      setPassword(e.target.value);
    }
  };
  return (
    <StyledLoginContainer>
      {" "}
      Username : <Input onChange={changeUsernameInput}></Input>
      Password : <Input onChange={changePasswordInput}></Input>
      <Button action={validate} buttonTitle={"Connexion"}></Button>
    </StyledLoginContainer>
  );
};

export default LoginForm;
