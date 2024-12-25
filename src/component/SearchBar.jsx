import "../styles/SearchBar.css";
import SearchLogo from "../assets/search.svg";

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchLogo}
        alt="search"
        onClick={() => onSearch(searchTerm)}
      ></img>
    </div>
  );
}

export default SearchBar;
