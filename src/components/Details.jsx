import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const { movieId, category } = location.state || {};
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (movieId) {
      axios
        .get(
          `https://api.themoviedb.org/3/${category}/${movieId}?api_key=89be26a44d4f79742895a4ab72ad8c73&language=en-US`
        )
        .then((res) => {
          setMovie(res.data);
        })
        .catch((err) => {
          console.error("Error fetching movie details:", err);
        });
    }
  }, [movieId]);

  if (!movieId) {
    return (
      <div>
        <p className="text-center text-3xl animate-spin ">
          <i className="fa-solid fa-spinner"></i>
        </p>
        <p className="text-center font-semibold ">Loading</p>
      </div>
    );
  }

  return (
    <>
      {Object.keys(movie).length > 0 ? (
        <div>
          <div
            className=" h-screen relative flex flex-row justify-center  items-end"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-white protest text-5xl sm:text-7xl tracking-widest font-extrabold text-center mb-80 gap-5">
              {movie.title ?? movie.name}
            </h1>
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener norefrrer"
              className="bg-white mb-64 items absolute p-2 rounded-3xl w-56 text-center font-semibold text-xl uppercase tracking-wider"
            >
              Watch Now
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent"></div>
          </div>

          <div className="mt-10">
            <div className="m-10 flex flex-col md:flex-row gap-10">
              <img
                className="w-[20rem]"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title ?? movie.name}
              />
              <div className="md:w-[60%] flex flex-col gap-3">
                <h1 className="text-4xl font-sans parkinsans">
                  {movie.title ?? movie.name}
                </h1>
                <div className="flex gap-2">
                  <span className="font-semibold">Rating:</span>
                  <p>{movie.popularity}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Release Date:</span>
                  <p>{movie.release_date}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Genre:</span>
                  <p>{movie.genres && movie.genres[0]?.name}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Status:</span>
                  <p>{movie.status}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Rutime:</span>
                  <p>{movie.runtime} minutes</p>
                </div>
                <div className="flex-col flex gap-3">
                  <span className="font-semibold">Overview:</span>
                  <p className="text-gray-500 text-lg tracking-wide ">
                    "{movie.overview}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-3xl animate-spin items-center ">
            <i className="fa-solid fa-spinner"></i>
          </p>
          <p className="text-center font-semibold ">Loading</p>
        </div>
      )}
    </>
  );
}

export default Details;
