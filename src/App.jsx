import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    console.log("Load data");
    setLoading(true);
    axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
      console.log(resp);
      setCharacters(resp.data.results);
      setLoading(false);
    });
  };

  const printList = () => {
    return (
      <div className="cols">
        {characters.map((curCharacter) => (
          <CharacterCard key={curCharacter.id} character={curCharacter}/>
        ))}
      </div>
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
