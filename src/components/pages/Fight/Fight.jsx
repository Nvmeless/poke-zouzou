import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store";
import { apiZouzoumon } from "../../../toolkit/api.config";
import axios from "axios";
import { Button } from "../../atoms";
import { TeamInventory } from "../../molecules";
import { Battle } from "../../organisms";
import styled from "styled-components";

const StyledFightContainer = styled.div`
  position: absolute;
  height: 10rm;
  width: 20rm;
`;
const Fight = () => {
  const dispatch = useDispatch();
  const [battleView, setBattleView] = useState(false);
  const [datas, setDatas] = useState(false);
  const [attack, setAttack] = useState(false);
  const [oponent, setOponent] = useState(false);
  const user = useSelector((state) => {
    return state.user;
  });
  // useEffect(() => {
  //   dispatch(
  //     addMessage({
  //       from: "Game",
  //       title: "Hello",
  //       content: "Hey Oh !",
  //     })
  //   );

  //   console.log("MERCURE");
  //   const url = new URL("http://localhost:3000/.well-known/mercure");
  //   url.searchParams.append("topic", "http://localhost/api/test");
  //   const eventSource = new EventSource(url);
  //   eventSource.onmessage = (e) => console.log(e);
  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  useEffect(() => {
    if (datas?.status === "active") {
      setBattleView(datas?.status === "active");
      console.log(datas);
      setAttack(datas.battleTeam.filter((e) => e.name === "attack")[0]);
      setOponent(datas.battleTeam.filter((e) => e.name === "defense")[0]);
    }
  }, [datas]);

  useEffect(() => {}, [attack]);

  const startBattle = () => {
    if (user?.auth !== true) {
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: "Non Connecté !",
        })
      );
    }
    const config = apiZouzoumon("post", "fight", {}, user.token);
    axios(config)
      .then((response) => {
        dispatch(
          addMessage({
            from: "security",
            title: "Battle Agent",
            content: "Opponent found !",
          })
        );
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledFightContainer>
      {battleView ? (
        <>
          <Battle attack={attack} oponent={oponent}></Battle>
        </>
      ) : (
        <Button buttonTitle="Search Battle !" action={startBattle}></Button>
      )}
    </StyledFightContainer>
  );
};

export default Fight;
