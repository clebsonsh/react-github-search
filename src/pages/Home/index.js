import { useState } from "react";
import axios from "axios";

import * as S from "./styled";

const Home = () => {
  const [usuario, setUsuario] = useState("");

  const handlePesquisa = () => {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(({ data }) => console.log(data));
  };
  return (
    <S.Container>
      <S.Input
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="usuarioInput"
        type="text"
        placeholder="Usuário"
      />
      <S.Button type="button" onClick={handlePesquisa}>
        Pesquisar
      </S.Button>
    </S.Container>
  );
};

export default Home;
