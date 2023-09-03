/* eslint-disable import/extensions */
import brainGreet from '../bin/brain-greeter.js';
import brainEven from '../bin/brain-even.js';
import brainCalc from '../bin/brain-calc.js';

export const brainGreetExp = (ind) => {
  if (ind === '1') {
    return brainGreet();
  }
};

export const brainEvenExp = (ind) => {
  brainEven();
};

export const brainCalcExp = (ind) => {
  brainCalc();
};
