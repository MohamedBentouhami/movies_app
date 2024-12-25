import "../styles/MovieContainer.css";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      ></img>
      <div className="type">
        <span>{movie.Type}</span>
      </div>
      <div className="title">
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
