import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
import WatchedMovie from "./WatchedMovie";

function MovieDetails({ selectedId, onAddWatched, watched }) {
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

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const handleAddWatchedMovie = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      poster,
      imdbRating,
      userRating,
    };
    onAddWatched(newWatchedMovie);
  };

  useEffect(() => {
    async function getMovieDetail() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        // if (data.Response === "False") throw new Error(`${data.Error}`);
        console.log("data", data);
        setMovie(data);
      } catch (error) {}
      setIsLoading(false);
    }
    getMovieDetail();
  }, [selectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back">&larr;</button>
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
                <div>
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
                </div>
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
