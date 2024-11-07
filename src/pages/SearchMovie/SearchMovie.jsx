import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { Link } from 'react-router-dom';
import Navbar from '../../component/NavBar/Navbar';
import ScrollTop from '../../component/scrollTop';

function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Load saved movies from localStorage on component mount
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('searchedMovies'));
    if (savedMovies && savedMovies.length > 0) {
      setMovies(savedMovies);
      setHasSearched(true);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer YOUR_API_KEY',
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || [];
        setMovies(results);
        localStorage.setItem('searchedMovies', JSON.stringify(results)); // Save results to localStorage
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='search-movie'>
      <Navbar />
      <div className='search-form'>
        <form action="" className="search-input" onSubmit={handleFormSubmit}>
          <input type="text" placeholder='Enter the movie name...'
            onChange={(e) => { setSearchMovie(e.target.value) }}
          />
          <button className='search-btn'>Search</button>
        </form>
      </div>

      <div className="movies-lists">
        {
          !hasSearched ? (
            <p className='center'>Type a movie name to search...</p>
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <Link to={`/player/${movie.id}`} className="movie-card" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.original_title} loading='lazy' />
                <div className="movie-title">
                  <h4>{movie.original_title}</h4>
                  <p>{movie.release_date}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className='center'>No results found for "{searchMovie}".</p>
          )
        }
      </div>
      <ScrollTop/>
    </div>
  );
}

export default SearchMovie;
