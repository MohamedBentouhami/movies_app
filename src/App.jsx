import { useEffect, useState } from "react";
import "./styles/App.css";
import SearchBar from "./component/SearchBar";
import MoviesList from "./component/MoviesList";
import { fetchData } from "./utils/Api";

const API_URL = `http://www.omdbapi.com?apikey=${import.meta.env.VITE_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchData("Spiderman");
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const handleSearch = async (title) => {
    const movies = await fetchData(title);
    setMovies(movies);
  };

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
