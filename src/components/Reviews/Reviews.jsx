import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import showErrorMessage from 'services/toast';

import css from './reviews.module.css';

const Reviews = () => {
  const [reviews, setRevies] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);

        if (response.status === 200) {
          setRevies(response.data.results);
        } else {
          throw new Error('Error');
        }
      } catch (error) {
        showErrorMessage(error.message);
        setRevies([]);
      }
    };
    getMoviesReviews();
  }, [movieId]);

  return (
    <div>
      {Array.isArray(reviews) && reviews.length === 0 && (
        <div>
          <h3>We don't have any reviews for this movie.</h3>
        </div>
      )}
      {Array.isArray(reviews) &&
        reviews.map(review => (
          <div key={review.id}>
            <div className={css.feedback}>
              <span>
                <b>Author</b>: {review.author}
              </span>
              <p>{review.content}</p>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Reviews;
