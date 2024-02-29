import { useEffect, useState } from 'react';
import TrendItem from '../../components/TrendItem';
import { fetchTrends } from '../../services/api.js';
import showErrorMessage from '../../services/toast.js';

import css from './home.module.css';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const response = await fetchTrends();
        if (response.status === 200) {
          setTrends(response.data.results);
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        showErrorMessage(error.message);
        setTrends([]);
      }
    };

    getTrends();
  }, []);

  return (
    <div>
      <h1 className={css.trends}>Trending today</h1>
      <ul>
        {trends.map(trend => (
          <TrendItem key={trend.id} movie={trend} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
