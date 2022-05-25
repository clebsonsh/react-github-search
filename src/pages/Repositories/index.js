import { useState, useEffect } from "react";
import * as S from "./styled";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const reposNames = JSON.parse(localStorage.getItem("reposNames"));
    setRepositories(reposNames);
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map((repo) => (
          <S.ListItem key={repo.id}>Repositório: {repo.name} </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};
export default Repositories;
