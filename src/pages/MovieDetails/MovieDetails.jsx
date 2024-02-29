import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import BackLink from '../../components/BackLink';
import MovieMainDetails from '../../components/MovieMainDetails';
import showErrorMessage from 'services/toast';

const Movie = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const backLinkState = useRef(location.state ?? '/');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        if (response.status === 200) {
          setMovieDetails(response.data);
        } else {
          throw new Error('Error');
        }
      } catch (error) {
        setMovieDetails({});
        showErrorMessage(error.message);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <BackLink
        to={
          backLinkState.current.pathname + (backLinkState.current.search ?? '')
        }
      />
      {movieDetails && <MovieMainDetails data={movieDetails} />}
    </div>
  );
};

export default Movie;
