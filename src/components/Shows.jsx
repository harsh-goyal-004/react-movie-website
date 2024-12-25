import React from "react";
import Banner from "./Banner";
import MovieHeader from "./MovieHeader";

function Shows({ handleAddToWatchList, handleRemoveFromWatchlist, watchlist }) {
  return (
    <>
      <Banner category={"tv"} />
      <MovieHeader
        handleAddToWatchList={handleAddToWatchList}
        handleRemoveFromWatchlist={handleRemoveFromWatchlist}
        watchlist={watchlist}
        category={"tv"}
      />
    </>
  );
}

export default Shows;
