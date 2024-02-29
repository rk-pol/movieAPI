import { Link } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../../images/leftArrow.svg';

import style from './backLink.module.css';

const BackLink = ({ to }) => (
  <div className={style.backLink}>
    <Link to={to}>
      <LeftArrow width={20} height={20} />
      <span className={style.title}>Go back</span>
    </Link>
  </div>
);

export default BackLink;
