import axios from 'axios';

const api_token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTA3YTdlODE5Zjg3N2M0ZDQxZjUxMDY2N2JlMzcwMSIsInN1YiI6IjY1YTkzMWY2N2QyYmMxMDEyNmVhNzgxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMcJHNqVy-cC3arQvSZwuCc208umnP39oIcNPIsmtKU';
const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${api_token}`,
  },
});

export const fetchTrends = () => {
  return request.get('/trending/movie/day?language=en-US');
};

export const fetchMovieDetails = movieId => {
  return request.get(`/movie/${movieId}?language=en-US`);
};

export const fetchMovieCast = movieId => {
  return request.get(`/movie/${movieId}/credits?language=en-US`);
};

export const fetchMovieReviews = movieId => {
  return request.get(`/movie/${movieId}/reviews?language=en-US`);
};

export const fetchMovies = query => {
  return request.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
};
