import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Explore({
  handleAddToWatchList,
  watchlist,
  handleRemoveFromWatchlist,
}) {
  const [searchMovie, setSearchMovie] = useState("");
  const [results, setResults] = useState([]);

  function handleSearchMovie(e) {
    setSearchMovie(e.target.value);
  }

  function handleMovieWatchlistBtnToggle(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=89be26a44d4f79742895a4ab72ad8c73&include_adult=false&language=en-US&page=1`
      )
      .then((res) => {
        setResults(res.data.results);
      });
  }, [searchMovie]);

  return (
    <>
      <div className="w-full">
        <div className="w-full relative flex justify-center ">
          <input
            type="search"
            name="movie-search"
            id="search"
            className="border-2 p-4 xs:p-1 xs:text-[16px] xs:w-52 sm:w-1/2 text-xl mt-10  rounded-lg "
            placeholder="Movies, shows and More"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.length > 0) {
                handleSearchMovie(e);
              }
            }}
          />
        </div>

        {results.length > 0 ? (
          <>
            <div className="mt-16 m-4 ">
              <h1 className="text-gray-500 font-semibold text-2xl parkinsans">
                Results of {searchMovie} :
              </h1>
            </div>
            <div className="p-5 flex flex-row flex-wrap gap-5 items-start  sm:gap-5  lg:gap-8 justify-center lg:justify-start lg:pl-10  ">
              {results.map((movie) => {
                return (
                  <div
                    className="h-70 w-28 relative  sm:w-32 lg:w-40 "
                    key={movie.id}
                  >
                    <Link
                      to="/Details"
                      state={{ movieId: movie.id, category: "movie" }}
                    >
                      <div
                        className="mt-6 w-28 h-52 sm:w-32 lg:w-40 flex   flex-row  justify-start hover:z-10 hover:scale-110 transition-all relative duration-75"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </Link>
                    {handleMovieWatchlistBtnToggle(movie) ? (
                      <button
                        className=" absolute  right-0 mr-2 mt-2 text-black"
                        onClick={() => handleRemoveFromWatchlist(movie)}
                      >
                        <i className="bi bi-bookmark-fill"></i>
                      </button>
                    ) : (
                      <button
                        className=" absolute  right-0 mr-2  mt-2 text-black "
                        onClick={() => handleAddToWatchList(movie)}
                      >
                        <i className="bi bi-bookmark"></i>
                      </button>
                    )}

                    <div className=" ">
                      <h1 className=" font-semibold text-gray-700 mt-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis w-[80%]">
                        {movie.title}
                      </h1>
                      <p className="text-[13.5px] text-gray-500 mt-[0.5px">
                        {movie.release_date.slice(0, 4)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default Explore;
