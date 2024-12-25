import React from "react";
import MovieList from "./MovieList";

function MovieHeader({
  handleAddToWatchList,
  handleRemoveFromWatchlist,
  watchlist,
  category,
}) {
  return (
    <>
      <div className="h-screen mt-5 ">
        <div className="flex gap-3 items-center pl-10 pr-10 justify-center">
          <div className="flex-grow bg-gray-900 h-[1.5px] "></div>
          <i className="bi bi-fire text-[#FF014C] text-2xl "></i>
          <h1 className="text-2xl font-bold">Trending</h1>
          <div className="flex-grow bg-gray-900 h-[1.5px] "></div>
        </div>
        <MovieList
          handleAddToWatchList={handleAddToWatchList}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist}
          watchlist={watchlist}
          category={category}
        />
      </div>
    </>
  );
}

export default MovieHeader;
