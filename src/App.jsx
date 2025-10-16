import { Header } from "./components/Header/Header.jsx";
import { CharacterRatings } from "./components/CharacterRatings/CharacterRatings.jsx";
import { CharacterList } from "./components/CharacterList/CharacterList.jsx";
import { data } from "./data/fma-data.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <CharacterRatings data={data} />
        <CharacterList data={data} />
      </div>
    </>
  );
}

export default App;
