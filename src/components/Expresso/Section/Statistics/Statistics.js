import React from 'react';
import {
  StatisticsContainer,
  StatisticsItem,
  StatisticsTitle,
} from './Statistics.styled';
import Notification from './Notification/Notification';

const Statistics = props => {
  const {
    good,
    neutral,
    bad,
    total = 0,
    positivePercentage = 0,
    resetFeedBack,
  } = props;

  return (
    <>
      <StatisticsContainer>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
      </StatisticsContainer>
      <div>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <h5>Total: {total}</h5>
            <h5>Positive feedback: {positivePercentage}% </h5>
            <button type="button" onClick={resetFeedBack}>
              Reset
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Statistics;
