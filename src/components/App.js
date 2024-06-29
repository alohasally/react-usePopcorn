import { useEffect, useRef, useState } from "react";

import { useKey } from "./hooks/useKey";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { useMovies } from "./hooks/useMovies";

import StarRating from "./StarRating";
import Loader from "./Loader";
import NavBar from "./NavBar";
import Main from "./Main";
import MovieList from "./MovieList";
import WatchedMoviesList from "./WatchedMoviesList";
import Box from "./Box";
import WatchedMovie from "./WatchedMovie";
import Search from "./Search";
import NumResults from "./NumResults";
import MovieDetails from "./MovieDetails";
import WatchedSummary from "./WatchedSummary";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "e68aaade";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");
  console.log(watched);
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    console.log("movie", movie);
    console.log("watched", watched);
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  console.log(selectedId);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          <MovieList movies={movies} onSelectedId={handleSelectMovie} />
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onAddWatched={handleAddWatched}
              onCloseMovie={handleCloseMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDelete={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
