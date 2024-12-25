import MovieCard from "./MovieCard";
import "../styles/MoviesList.css";

function MoviesList({ movies }) {
  return (
    <div>
      {movies.length == 0 && <div className="empty">No movies found</div>}
      <div className="movies_list">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
