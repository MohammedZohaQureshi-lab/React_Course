import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fecthMovieHandler = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error("Error Occured")
      }
      const data = await response.json();

      const transform = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
      })
      setMovies(transform);
      setIsLoading(false)
    } catch (error) {
      setError(error.message);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fecthMovieHandler();
  }, [])

  return (
    <React.Fragment>
      <section>
        <button onClick={fecthMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <h1>Data Loading...</h1>}
        {(movies.length === 0 && !isLoading && !error) && <h1>No Data to load</h1>}
        {(error && !isLoading) && <h1>Error Occured</h1>}
        {(movies.length !== 0 && !isLoading && !error) && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
