import { Link, useLocation } from 'react-router-dom';

const TrendItem = ({ movie }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={location}>
        {movie.original_title}
      </Link>
    </li>
  );
};

export default TrendItem;
