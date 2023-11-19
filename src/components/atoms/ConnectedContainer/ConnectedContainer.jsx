import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store";
import { useNavigate } from "react-router-dom";

const ConnectedContainer = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    if (!state.user.auth) {
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: "Non Connecté !",
        })
      );
      return navigate("/login");
    }
    return state.user;
  });

  //       dispatch(
  //     addMessage({
  //       from: "security",
  //       title: "Security Agent",
  //       content: "Non Connecté !",
  //     })
  //   );
  return <>{props.children}</>;
};

export default ConnectedContainer;
