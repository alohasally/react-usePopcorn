import React from "react";

function WatchedMovie({ movie, onDelete }) {
  console.log("movie", movie);
  return (
    <li>
      <img src={movie.poster} />
      <button
        className="btn-delete"
        onClick={() => onDelete(movie.imdbID)}
      ></button>
    </li>
  );
}

export default WatchedMovie;
