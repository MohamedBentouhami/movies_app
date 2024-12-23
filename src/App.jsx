import { useEffect } from "react";
import "./styles/App.css";
import SearchBar from "./component/SearchBar";

const API_URL = `http://www.omdbapi.com?apikey=${import.meta.env.VITE_API_KEY}`;

function App() {
  useEffect(() => {
    fetchData("Spiderman").then("");
  }, []);
  
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <SearchBar />
    </div>
  );
}

async function fetchData(title) {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  console.log(data);
}

export default App;
