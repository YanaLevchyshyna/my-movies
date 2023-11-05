import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const formatRating = rating => {
  const formattedRating = Math.round(rating * 10); // Округлюємо до одного знаку після коми

  return `${formattedRating}`;
};

export default function CircularRating({ rating }) {
  const formattedCircularRating = formatRating(rating);

  return (
    <div style={{ width: 60, height: 60 }}>
      <CircularProgressbar
        value={formattedCircularRating}
        maxValue={100}
        text={`${formattedCircularRating}%`}
        styles={buildStyles({
          pathColor:
            rating < 5 ? '#c7251a' : rating < 7 ? '#b57a04' : '#286b3a',
          height: '100%',
          width: '100%',
          textSize: '32px',
          fontWeight: '700',
          pathTransitionDuration: 0.5,
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#fff',
        })}
      />
    </div>
  );
}

CircularRating.propTypes = {
  rating: PropTypes.number,
};
