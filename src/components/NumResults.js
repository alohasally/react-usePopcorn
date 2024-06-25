import React from "react";

function NumResults({ movies }) {
  return (
    <div className="num-results">
      Found <em>{movies.length}</em> movies
    </div>
  );
}

export default NumResults;
