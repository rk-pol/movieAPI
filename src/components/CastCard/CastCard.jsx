import { ReactComponent as PlaceHolder } from '../../images/placeHolder.svg';

import css from './castCard.module.css';

const CastCard = ({ actor }) => (
  <div className={css.wrapper}>
    <div className={css.actorsCard}>
      {actor.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name}
        />
      ) : (
        <PlaceHolder width={170} height={255} />
      )}
      <div className={css.cardDetails}>
        <span className={css.cardDetailsName}>
          <b>Name</b>: {actor.name}
        </span>
        <span className={css.cardDetailsCharacter}>
          <b>Character</b>: {actor.character}
        </span>
      </div>
    </div>
  </div>
);

export default CastCard;
