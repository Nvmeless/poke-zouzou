import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MessagesContainer } from "../../molecules";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../store";
const Messages = ({ messageCooldown = 1 }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => {
    return state.messages;
  });
  const [previousId, setPreviousId] = useState(false);
  const [changeMessage, setChangeMessage] = useState(true);
  const [messagesState, setMessagesState] = useState("Hello");
  //   useEffect(() => {
  //     //Set Timer
  //     const timer = setInterval(() => {
  //       deletePreviousMessage();
  //       setChangeMessage(true);
  //     }, messageCooldown * 1000);

  //     if (changeMessage) {
  //       manageMessages();
  //       setChangeMessage(false);
  //     }

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, [changeMessage]);

  useEffect(() => {
    manageMessages();
  }, [messages]);
  useEffect(() => {
    deletePreviousMessage();
  }, [previousId]);
  const manageMessages = () => {
    if (messages.length > 0) {
      setMessagesState(messages[0]?.content);
      setPreviousId(messages[0]?.id);
    }
  };
  const deletePreviousMessage = () => {
    if (previousId) {
      dispatch(deleteMessage(previousId));
    }
  };
  return (
    <MessagesContainer
      content={[messagesState]}
      title="GAME DEV"
    ></MessagesContainer>
  );
};

export default Messages;
