import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import showErrorMessage from 'services/toast';
import CastCard from 'components/CastCard';

import css from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCost = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        if (response.status === 200) {
          setCast(response.data.cast);
        } else {
          throw new Error('Cast was not found');
        }
      } catch (error) {
        showErrorMessage(error.message);
        setCast([]);
      }
    };
    getMovieCost();
  }, [movieId]);

  return (
    <div className={css.castList}>
      {cast.map(actor => (
        <CastCard actor={actor} key={actor.id} />
      ))}
    </div>
  );
};

export default Cast;
