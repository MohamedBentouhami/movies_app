import "../styles/SearchBar.css";
import SearchLogo from "../assets/search.svg";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies"
        value="Superman"
        onChange={() => {}}
      />
      <img src={SearchLogo} alt="search" onClick={() => {}}></img>
    </div>
  );
}

export default SearchBar;
