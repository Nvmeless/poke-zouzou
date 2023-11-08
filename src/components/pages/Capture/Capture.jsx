import axios from "axios";
import { useEffect, useState } from "react";
import { PokedexEntrie } from "../../molecules";
const Capture = () => {
  const [datas, setDatas] = useState(false);
  const [caught, setCaught] = useState("try");
  const [pokemon, setPokemon] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:32819/api/pokemon/catch", {})
      .then(function (response) {
        setDatas(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log(datas);
    if (datas?.message == "not catched") {
      setCaught(false);
    } else {
      setCaught(true);
      setPokemon(datas);
      setPokedex(datas.pokedex);
    }
  }, [datas]);

  return (
    <div>
      <h1>CAPUTRE</h1>
      {caught === true ? <PokedexEntrie ></PokedexEntrie> : <div>Raté ...</div>}

      {/* <PokedexEntrie></PokedexEntrie> */}
    </div>
  );
};

export default Capture;
