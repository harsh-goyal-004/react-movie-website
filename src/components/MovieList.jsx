import React, { useEffect, useState } from "react";
import axios from "axios";
import Paging from "./Paging";
import { Link } from "react-router-dom";

function MovieList({
  handleAddToWatchList,
  watchlist,
  handleRemoveFromWatchlist,
  category,
}) {
  const [moviePoster, setMoviePoster] = useState({});

  const [pageNo, setPageNo] = useState(1);

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
        `https://api.themoviedb.org/3/${category}/popular?api_key=89be26a44d4f79742895a4ab72ad8c73&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        const data = res.data.results;
        setMoviePoster(data);
      })
      .catch((err) => console.log("Error Fetching Movies : ", err));
  }, [pageNo]);

  return (
    <>
      {moviePoster.length > 0 ? (
        <div className="p-5 flex flex-row flex-wrap gap-5 items-start  sm:gap-5  lg:gap-8 justify-center lg:justify-start lg:pl-10  ">
          {moviePoster.map((movie) => {
            return (
              <div
                className="h-70 w-28 relative  sm:w-32 lg:w-40 "
                key={movie.id}
              >
                <Link
                  to="/Details"
                  state={{ movieId: movie.id, category: category }}
                >
                  <div
                    className="mt-6 w-28 h-52 sm:w-32 lg:w-40 flex   flex-row  justify-start hover:z-10 hover:scale-110 transition-all relative duration-75"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={movie.title ?? movie.name}
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
                    {category === "movie" ? movie.title : movie.name}
                  </h1>
                  <p className="text-[13.5px] text-gray-500 mt-[0.5px]">
                    {category === "movie"
                      ? movie.release_date.slice(0, 4)
                      : movie.first_air_date.slice(0, 4)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p className="text-center text-3xl animate-spin ">
            <i className="fa-solid fa-spinner"></i>
          </p>
          <p className="text-center font-semibold ">Loading</p>
        </div>
      )}
      <Paging pageNo={pageNo} setPageNo={setPageNo} />
    </>
  );
}

export default MovieList;
