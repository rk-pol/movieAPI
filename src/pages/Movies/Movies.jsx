import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import showErrorMessage from 'services/toast';

import css from './movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const param = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchMovies(param);
        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          throw new Error('Error');
        }
      } catch (error) {
        setMovies([]);
        showErrorMessage(error.message);
      }
    };
    if (param === '') return;
    getMovies();
  }, [param]);

  const onSubmitHandle = evt => {
    evt.preventDefault();

    const { value } = evt.target.firstChild;
    if (value === '') return setSearchParams({});
    setSearchParams({ query: value });
    evt.target.reset();
  };

  return (
    <>
      <div className={css.wrapper}>
        <form onSubmit={onSubmitHandle}>
          <input type="text" name="search" className={css.searchField} />
          <button type="submit" className={css.btn} name="bnt">
            Search
          </button>
        </form>
      </div>
      <div className={css.moviesList}>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
