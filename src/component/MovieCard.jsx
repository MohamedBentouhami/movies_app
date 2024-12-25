import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title}></img>
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
