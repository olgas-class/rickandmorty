import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Paginator from "./components/Paginator";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadData();
  }, [curPage]);

  const loadData = () => {
    console.log("Load data");
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character`, {
        params: { page: curPage },
      })
      .then((resp) => {
        console.log(resp);
        setCharacters(resp.data.results);
        setTotalPages(resp.data.info.pages);
        setLoading(false);
      });
  };

  const printList = () => {
    return (
      <>
        <Paginator
          curPage={curPage}
          totalPages={totalPages}
          cambiaPagina={(newPage)=> {
            console.log("nuova pagina", );
            setCurPage(newPage);
          }}
        />
        <div className="cols">
          {characters.map((curCharacter) => (
            <CharacterCard key={curCharacter.id} character={curCharacter} />
          ))}
        </div>
      </>
    );
  };

  // const printMessage = () => {
  //   return <p>Clicca il pulsante per vedere personaggi</p>;
  // };

  return (
    <div className="container my-20">
      {loading && <p>loading...</p>}
      {printList()}
    </div>
  );
}

export default App;
