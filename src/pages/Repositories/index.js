import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

const Repositories = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const reposNames = localStorage.getItem("reposNames");
    if (reposNames !== null) {
      setRepositories(JSON.parse(reposNames));
      localStorage.clear();
    } else {
      navigate("/");
    }
    console.log(reposNames);
  }, [navigate]);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map((repo) => (
          <S.ListItem key={repo.id}>Repositório: {repo.name} </S.ListItem>
        ))}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
};
export default Repositories;
