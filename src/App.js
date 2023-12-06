import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Counter from "./Counter";
//810027a5

const API_URL = "https://www.omdbapi.com?apikey=810027a5";

const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>FilmTopia</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(query)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
