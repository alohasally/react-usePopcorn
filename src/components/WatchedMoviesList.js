import React from "react";
import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched }) {
  console.log(watched, watched);
  return (
    <ul className="list list-watched ">
      {watched.map((movie) => {
        return <WatchedMovie movie={movie} />;
      })}
    </ul>
  );
}

export default WatchedMoviesList;
