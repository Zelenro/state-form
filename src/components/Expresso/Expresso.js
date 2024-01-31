import React, { Component } from 'react';
import Section from './Section/Section';
import { StyledDiv } from './Expresso.styled';

class Expresso extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handlerNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handlerBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    return (
      <>
        <StyledDiv>
          <Section
            title="Expresso"
            handlerGood={this.handlerGood}
            handlerNeutral={this.handlerNeutral}
            handlerBad={this.handlerBad}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </StyledDiv>
      </>
    );
  }
}

export default Expresso;
