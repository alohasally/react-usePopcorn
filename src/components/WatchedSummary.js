import React from "react";

function WatchedSummary({ watched }) {
  const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

  const avgRating = average(watched.map((movie) => movie.userRating));
  const avgRanking = average(watched.map((movie) => movie.imdbRating));
  const avgRunTime = average(
    watched.map((movie) => isFinite(movie.runtime) && movie.runtime)
  );
  console.log(watched);
  return (
    <div className="summary">
      <h2>Movies You Watched </h2>
      <div>
        <p>
          <span>#️⃣</span> {watched.length} movies
        </p>
        <p>
          <span>⭐️</span>
          {avgRating.toFixed(2)}
        </p>
        <p>
          <span>🌟</span>
          {avgRanking.toFixed(2)}
        </p>
        <p>
          <span>⌛️</span>
          {avgRunTime.toFixed(1)}mins
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
