import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useKey } from "./useKey";
import { useLocalStorageState } from "./useLocalStorageState";
import { useMovies } from "./useMovies";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "f84fc31d";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {}

  function handleCloseMovie() {
    function handleAddWatched(movie) {}

    function handleDeleteWatched(id) {}

    return (
      <>
        <NavBar></NavBar>

        <Main></Main>
      </>
    );
  }
}

function Loader() {}

function ErrorMessage() {}

function NavBar() {}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search() {}

function NumResults() {}

function Main() {}

function Box() {}

function MovieList() {}

function Movie() {}

function MovieDetails() {}

function WatchedSummary() {}

function WatchedMoviesList() {}

function WatchedMovie() {}
