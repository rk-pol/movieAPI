import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { getYear, getUsersScore } from 'services/functions';

import css from './movieMainDetails.module.css';

const MovieMainDetails = ({ data }) => (
  <>
    <div className={css.wrapper}>
      <div className={css.details}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.tittle}
          float="left"
        />
        <div>
          <h2>{`${data.title} (${getYear(data.release_date)})`}</h2>
          <p>User score: {getUsersScore(data.vote_average)}%</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <h3>Genres</h3>
          <p>
            {data.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.moreDetails}>
        <hr />
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  </>
);

export default MovieMainDetails;
