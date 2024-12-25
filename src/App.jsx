import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import Shows from "./components/Shows";
import Watchlist from "./components/Watchlist";
import { useState } from "react";
import Details from "./components/Details";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  function handleAddToWatchList(movieObj) {
    let newWatchList = [...watchlist, movieObj];
    setWatchlist(newWatchList);
  }

  function handleRemoveFromWatchlist(movieObj) {
    const filterList = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filterList);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                watchlist={watchlist}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          ></Route>

          <Route
            path="/Explore"
            element={
              <Explore
                watchlist={watchlist}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          ></Route>

          <Route
            path="/Shows"
            element={
              <Shows
                watchlist={watchlist}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          ></Route>

          <Route
            path="/Watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          ></Route>
          <Route path="/Details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
