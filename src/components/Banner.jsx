import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner({ category }) {
  const [bannerMovies, setBannerMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${category}/popular?api_key=89be26a44d4f79742895a4ab72ad8c73&language=en-US&page=1`
      )
      .then((res) => {
        const movieBannerList = res.data.results.slice(0, 5);

        setBannerMovies(movieBannerList);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bannerMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerMovies.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [bannerMovies]);

  return (
    <div
      className="relative 
    overflow-hidden"
    >
      {bannerMovies.length > 0 ? (
        <div
          className="flex  duration-75 relative "
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`,
            transition: "transform 0.5s ease",
            width: `${bannerMovies.length * 100}vw`,
          }}
        >
          {bannerMovies.map((movie) => (
            <div
              key={movie.id}
              className="h-screen w-[100vw] flex flex-row items-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="sm:text-left w-96 sm:ml-16 bg-black bg-opacity-50 p-4 rounded">
                <h1 className="text-white font-semibold cinzel sm:tracking-widest text-2xl sm:text-4xl ">
                  {category === "movie" ? movie.title : movie.name}
                </h1>
                <p style={{ wordSpacing: "2px" }} className="text-white mt-4">
                  {movie.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center text-3xl animate-spin ">
            <i className="fa-solid fa-spinner"></i>
          </p>
          <p className="text-center font-semibold ">Loading</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={goToPrevSlide}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
}

export default Banner;
