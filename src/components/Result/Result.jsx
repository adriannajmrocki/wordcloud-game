import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

const Result = ({ points, nickname }) => {

  const formatPoints = (points) => {
    if (points === 1 || points === -1) {
      return <p className='points'>{points} point</p>
    } else {
      return <p className='points'>{points} points</p>
    }
  };

  return (
    <div className='result'>
      <h2 className='congrats'>Congratulations, {nickname}!</h2>
      <p className='score'>Your score:</p>
      {formatPoints(points)}
    </div>
  );
};

Result.propTypes = {
  points: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired
};
 
export default Result