import MovieCard from "./MovieCard";
import "../styles/MoviesList.css"

const movies = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
    Title: "Italian Spiderman",
    Type: "movie",
    Year: "2007",
    imdbID: "tt2705436",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
    Title: "Italian Spiderman",
    Type: "movie",
    Year: "2007",
    imdbID: "tt2705436",
  },
];

function MoviesList() {
  return (
    <div className="movies_list">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
}

export default MoviesList;
