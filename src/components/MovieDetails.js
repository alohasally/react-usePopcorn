import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
import WatchedMovie from "./WatchedMovie";

function MovieDetails({ selectedId, onAddWatched, watched, onCloseMovie }) {
  const KEY = "e68aaade";
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState();

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isWatched = watched?.map((movie) => movie.imdbID).includes(selectedId);
  const watchedRating = watched?.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const handleAddWatchedMovie = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
  };

  useEffect(() => {
    async function getMovieDetail() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetail();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Moive | ${title}`;
    return () => (document.title = "usePopcorn");
  }, [title]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={poster} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>
                {genre} &bull; {year}
              </p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button onClick={handleAddWatchedMovie}>
                      Add Watched Movie
                    </button>
                  )}
                </>
              ) : (
                <p>
                  you rated with movie {watchedRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
