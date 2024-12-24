import "../styles/MovieContainer.css";
const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436",
};
function MovieContainer() {
  return (
    <div className="movie">
      <img
        src={
          movie1.Poster !== "N/A"
            ? movie1.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie1.Title}
      ></img>
      <div className="type">
        <span>{movie1.Type}</span>
      </div>
      <div className="title">
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
}

export default MovieContainer;
