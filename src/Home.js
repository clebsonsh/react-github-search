import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [usuario, setUsuario] = useState("clebsonsh");

  const handlePesquisa = () => {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(({ data }) => console.log(data));
  };
  return (
    <>
      <input
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="usuarioInput"
        type="text"
        placeholder="Usuário"
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
    </>
  );
};

export default Home;
