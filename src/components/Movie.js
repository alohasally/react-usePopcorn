import React from "react";

function Movie({ movie, onSelectedId }) {
  return (
    <li
      onClick={() => {
        onSelectedId(movie.imdbID);
      }}
    >
      <img src={movie.Poster} />
      <h3>{movie.Title}</h3>
      <div>
        <p>{movie.Year}</p>
      </div>
    </li>
  );
}

export default Movie;
