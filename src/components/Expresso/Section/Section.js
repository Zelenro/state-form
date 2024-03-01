import React from 'react';
import Statistics from './Statistics/';
import FeedbackOptions from './FeedbackOptions/';
import { SectionContainer, SectionTitle } from './Section.styled';

const Section = props => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>{props.title}</SectionTitle>
        <FeedbackOptions
          handlerGood={props.handlerGood}
          handlerNeutral={props.handlerNeutral}
          handlerBad={props.handlerBad}
        />
        <Statistics
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
          total={props.total}
          positivePercentage={props.positivePercentage}
          resetFeedBack={props.resetFeedBack}
        />
      </SectionContainer>
    </>
  );
};

export default Section;
