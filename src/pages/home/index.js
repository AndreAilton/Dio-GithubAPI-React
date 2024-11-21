import Header from "../../components/Header";
import background from "../../assets/img/background.png";
import * as Styled from "./styled";
import ItemList from "../../components/ItemList";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  // Função para buscar dados da API
  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    setCurrentUser(newUser);

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if (newRepos.length) {
      setRepos(newRepos);
    }

    // Salvando dados no localStorage
    localStorage.setItem("lastUser", JSON.stringify(newUser));
    localStorage.setItem("lastRepos", JSON.stringify(newRepos));
  };

  // useEffect para carregar dados do localStorage
  useEffect(() => {
    const lastUser = localStorage.getItem("lastUser");
    const lastRepos = localStorage.getItem("lastRepos");

    if (lastUser) {
      setCurrentUser(JSON.parse(lastUser));
    }

    if (lastRepos) {
      setRepos(JSON.parse(lastRepos));
    }
  }, []); // Executa apenas ao montar o componente

  return (
    <div className="App">
      <Header Nome="props" />
      <Styled.Conteudo className="background">
        <Styled.Img
          src={background}
          alt="background app "
          className="background"
        />
        <Styled.Info>
          <Styled.ConteudoInfo>
            <Styled.Input
              type="text"
              placeholder="Digite seu nome"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Styled.Button onClick={handleGetData}>Buscar</Styled.Button>
          </Styled.ConteudoInfo>
          <Styled.Profile>
            {currentUser?.name ? (
              <>
                <Styled.ImgProfile
                  src={currentUser.avatar_url}
                  alt="background app "
                  className="background"
                />
                <Styled.Div>
                  <Styled.H1>{currentUser.name}</Styled.H1>
                  <Styled.P>@{currentUser.login} </Styled.P>
                  <Styled.P marginTop="10px" color="grey">
                    {currentUser.bio}
                  </Styled.P>
                </Styled.Div>
              </>
            ) : null}
          </Styled.Profile>
          <hr style={{ marginTop: "20px", opacity: "0.2" }} />
          <Styled.Repositorios>
            <h1 style={{ fontSize: "34px", margin: "1rem auto" }}>
              Repositórios
            </h1>

            {repos?.length ? (
              repos.map((repo) => (
                <ItemList
                  key={repo.id}
                  tittle={repo.name}
                  description={repo.description}
                  style={{ marginBottom: "20px" }}
                />
              ))
            ) : (
              <ItemList
                tittle="Repositórios"
                description="Nenhum repositório encontrado"
              />
            )}
          </Styled.Repositorios>
        </Styled.Info>
      </Styled.Conteudo>
    </div>
  );
}

export default App;
