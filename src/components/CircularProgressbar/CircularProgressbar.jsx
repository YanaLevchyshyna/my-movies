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
    <CircularProgressbar
      value={formattedCircularRating}
      maxValue={100}
      text={`${formattedCircularRating}%`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        pathColor:
          formattedCircularRating < 50
            ? '#c7251a'
            : formattedCircularRating < 70
            ? '#fa9f16'
            : '#04bf2c',
        height: '100%',
        width: '100%',
        textSize: '30px',
        pathTransitionDuration: 0.5,
        textColor: '#ffffff',
        trailColor: '#ffffff',
        backgroundColor: '#032541',
      })}
    />
  );
}

CircularRating.propTypes = {
  rating: PropTypes.number,
};
