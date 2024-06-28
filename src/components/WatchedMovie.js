import React from "react";

function WatchedMovie({ movie }) {
  console.log("movie", movie);
  return (
    <li>
      <img src={movie.poster} />
    </li>
  );
}

export default WatchedMovie;
