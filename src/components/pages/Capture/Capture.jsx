import axios from "axios";
import { useEffect, useState } from "react";
import { PokeZouzou } from "../../molecules";
import { Button } from "../../atoms";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { apiZouzoumon } from "../../../toolkit/api.config";
import { addMessage, getProfile } from "../../../store";
const StyleCaptureContainer = styled.div`
  display: flex;
`;
const StyledCaptureScreen = styled.div`
  width: 33vw;
`;
const StyledCapturePannel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Capture = () => {
  const [datas, setDatas] = useState(false);
  const [caught, setCaught] = useState("try");
  const [pokemon, setPokemon] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  const messages = useSelector((state) => {
    return state.messages;
  });

  const catchPokemon = () => {
    if (user?.auth !== true) {
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: "Non Connecté !",
        })
      );
    }

    const config = apiZouzoumon("post", "pokemon/catch", {}, user.token);
    axios(config)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (datas?.message == "not catched") {
      setCaught(false);
      dispatch(
        addMessage({
          from: "security",
          title: "Security Agent",
          content: `Raté ...`,
        })
      );
    } else {
      if (datas !== false && datas !== null) {
        setPokemon(datas);
        setPokedex(datas.pokedex);
        setCaught(true);
        dispatch(getProfile({ token: user.token }));
        dispatch(
          addMessage({
            from: "security",
            title: "Hautes Hebres",
            content: `Tu as caputré ${datas.name} niveau ${datas.level} ! `,
          })
        );
      }
    }
  }, [datas]);

  return (
    <div>
      <h1>CAPUTRE</h1>
      {/* {user.logged ? ( */}
      {true ? (
        <StyleCaptureContainer>
          {caught === true ? (
            <StyledCaptureScreen>
              {/* <h2>Bravo !</h2> */}

              <PokeZouzou
                id={pokedex?.pokemon_id_first}
                id_twice={pokedex?.pokemon_id_second}
              ></PokeZouzou>
            </StyledCaptureScreen>
          ) : (
            <StyledCaptureScreen>
              <div>:/</div>
            </StyledCaptureScreen>
          )}

          <Button buttonTitle={"Essaye encore"} action={catchPokemon}></Button>
          {/* <PokedexEntrie></PokedexEntrie> */}
        </StyleCaptureContainer>
      ) : (
        <div>Non Connecté</div>
      )}
    </div>
  );
};

export default Capture;
