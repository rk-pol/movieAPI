import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './Layouts';

const HomePage = lazy(() => import('../pages/Home'));
const MoviePage = lazy(() => import('../pages/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
