import React, { useEffect, useState } from 'react';
import Section from './Section/Section';
import { StyledDiv } from './Expresso.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Expresso = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const resetFeedBack = () => {
    setBad(0);
    setGood(0);
    setNeutral(0);
    toast('Feedback reset!');
  };

  useEffect(() => {
    toast('Expresso already!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    if (localStorage.feedback) {
      const localState = JSON.parse(localStorage.getItem('feedback'));
      const { good, bad, neutral } = localState;
      setBad(bad);
      setGood(good);
      setNeutral(neutral);
    }
    return;
  }, []);

  const updateLocalStorage = ({
    newGoodState = good,
    newBadState = bad,
    newNeutralState = neutral,
  }) => {
    const feedback = {
      good: newGoodState,
      bad: newBadState,
      neutral: newNeutralState,
    };
    localStorage.setItem('feedback', JSON.stringify(feedback));
  };

  const handlerGood = () => {
    setGood(prevState => {
      const newGoodState = prevState + 1;
      updateLocalStorage({ newGoodState });
      return newGoodState;
    });
  };

  const handlerNeutral = () => {
    setNeutral(prevState => {
      const newNeutralState = prevState + 1;
      updateLocalStorage({ newNeutralState });
      return newNeutralState;
    });
  };
  const handlerBad = () => {
    setBad(prevState => {
      const newBadState = prevState + 1;
      updateLocalStorage({ newBadState });
      return newBadState;
    });
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <StyledDiv>
        <Section
          title="Expresso"
          handlerGood={handlerGood}
          handlerNeutral={handlerNeutral}
          handlerBad={handlerBad}
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          resetFeedBack={resetFeedBack}
        />
      </StyledDiv>
      <ToastContainer />
    </>
  );
};

export default Expresso;
