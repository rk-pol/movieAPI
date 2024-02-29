import { Hourglass } from 'react-loader-spinner';

import css from './loader.module.css';

const Loader = () => (
  <div className={css.wrapper}>
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  </div>
);

export default Loader;
