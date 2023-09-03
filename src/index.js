/* eslint-disable import/extensions */
import greeter from './cli.js';
import cliEven from './src-games/cli-even.js';
import cliCalc from './src-games/cli-calc.js';

export const brainGreet = () => {
  greeter();
};

export const brainEven = () => {
  cliEven();
};

export const brainCalc = () => {
  cliCalc();
};
