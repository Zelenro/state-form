import React, { Component } from 'react';
import {
  FeedbackButton,
  FeedbackContainer,
  FeedbackTitle,
} from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackContainer>
          <FeedbackButton type="button" onClick={this.props.handlerGood}>
            Good
          </FeedbackButton>
          <FeedbackButton type="button" onClick={this.props.handlerNeutral}>
            Neutral
          </FeedbackButton>
          <FeedbackButton type="button" onClick={this.props.handlerBad}>
            Bad
          </FeedbackButton>
        </FeedbackContainer>
      </>
    );
  }
}
export default FeedbackOptions;
