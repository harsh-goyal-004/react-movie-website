import React from "react";
import Banner from "./Banner";
import MovieHeader from "./MovieHeader";

function Home({ handleAddToWatchList, handleRemoveFromWatchlist, watchlist }) {
  return (
    <>
      <Banner category={"movie"} />
      <MovieHeader
        handleAddToWatchList={handleAddToWatchList}
        handleRemoveFromWatchlist={handleRemoveFromWatchlist}
        watchlist={watchlist}
        category={"movie"}
      />
    </>
  );
}

export default Home;
