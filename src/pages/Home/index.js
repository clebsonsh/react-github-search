import { useState } from "react";
import axios from "axios";

import * as S from "./styled";

const Home = () => {
  const [usuario, setUsuario] = useState("");

  const handlePesquisa = () => {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(({ data }) => {
        const reposNames = data.map((repo) => repo.name);

        localStorage.setItem('reposNames', JSON.stringify(reposNames))      
      });
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
