import React from "react";

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
