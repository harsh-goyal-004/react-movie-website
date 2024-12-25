import React, { useState, useEffect } from "react";
import genreIds from "../assets/utility/genre";

function Watchlist({ watchlist, handleRemoveFromWatchlist }) {
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGen, setCurrGen] = useState("All Genres");

  function handleCurrGen(genre) {
    setCurrGen(genre);
  }

  useEffect(() => {
    let tempGenreList = watchlist.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    tempGenreList = new Set(tempGenreList); //To ensure each genre is unique
    setGenreList(["All Genres", ...tempGenreList]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap items-center gap-4 mb-5">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index}
              onClick={() => handleCurrGen(genre)}
              className={`${
                currGen == genre ? " bg-blue-700" : "bg-gray-400"
              } text-white font-semibold mt-5 h-[2.5rem] w-[8rem] text-center rounded-xl items-center justify-center flex text-md  `}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="rounded-lg overflow-hidden border-2 border-gray-100 m-4 mt-10">
        <table className="w-full text-gray-600 text-center ">
          <thead className="border">
            <tr className="border-b-2">
              <th>Movies</th>
              <th className="xs:hidden">Popularity</th>
              <th className="xs:hidden">Ratings</th>
              <th className=" xs:hidden">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGen === "All Genres") {
                  return true;
                } else {
                  return currGen === genreIds[movieObj.genre_ids[0]];
                }
              })
              .map((movie) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex justify-start items-center gap-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        className="w-[6rem] p-4  "
                        alt=""
                      />
                      <h1 className="text-xl font-semibold tracking-wide">
                        {movie.title ?? movie.name}
                      </h1>
                    </td>
                    <td className="xs:hidden">
                      {movie.vote_average.toFixed(1)}
                    </td>
                    <td className="xs:hidden">{movie.popularity.toFixed(2)}</td>
                    <td className="xs:hidden">
                      {genreIds[movie.genre_ids[0]]}
                    </td>
                    <td>
                      <button
                        className="text-2xl text-red-500 xs:text-xl"
                        onClick={() => {
                          handleRemoveFromWatchlist(movie);
                        }}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
