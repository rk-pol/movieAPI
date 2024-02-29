import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

import style from './header.module.css';

const SharedLayout = () => {
  return (
    <div>
      {console.log('adf')}
      <div className={style.wrapper}>
        <div className={style.header}>
          <NavLink className="" to="/">
            Home
          </NavLink>
          <NavLink className="" to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
