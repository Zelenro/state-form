import React, { Component } from 'react';
import Statistics from './Statistics/';
import FeedbackOptions from './FeedbackOptions/';
import { SectionContainer, SectionTitle } from './Section.styled';

class Section extends Component {
  render() {
    return (
      <>
        <SectionContainer>
          <SectionTitle>{this.props.title}</SectionTitle>
          <FeedbackOptions
            handlerGood={this.props.handlerGood}
            handlerNeutral={this.props.handlerNeutral}
            handlerBad={this.props.handlerBad}
          />
          <Statistics
            good={this.props.good}
            neutral={this.props.neutral}
            bad={this.props.bad}
            total={this.props.total}
            positivePercentage={this.props.positivePercentage}
          />
        </SectionContainer>
      </>
    );
  }
}

export default Section;
