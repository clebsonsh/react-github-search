import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

const Home = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [error, setError] = useState(false);

  const handlePesquisa = () => {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(({ data }) => {
        const reposNames = data.map((repo) => {
          const { id, name } = repo;
          return { id, name };
        });

        localStorage.setItem("reposNames", JSON.stringify(reposNames));
        setError(false);
        navigate("repositories");
      })
      .catch((error) => setError(true));
  };
  return (
    <S.HomeContainer>
      <S.Content>
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
      </S.Content>
      {error && <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg>}
    </S.HomeContainer>
  );
};

export default Home;
