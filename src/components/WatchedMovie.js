import React from "react";

function WatchedMovie({ movie, onDelete }) {
  console.log("movie", movie);
  return (
    <li className="summary">
      <img src={movie.poster} />
      <h2>{movie.title}</h2>
      <div>
        <p>
          <span>⭐️</span>
          {movie.userRating}
        </p>
        <p>
          <span>🌟</span>
          {movie.imdbRating}
        </p>
        <p>
          <span>⌛️</span>
          {movie.runtime}mins
        </p>
      </div>
      <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
        X
      </button>
    </li>
  );
}

export default WatchedMovie;
