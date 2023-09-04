/* eslint-disable import/extensions */
import greeter from './cli.js';
import cliEven from './src-games/cli-even.js';
import cliCalc from './src-games/cli-calc.js';
import cliGcd from './src-games/cli-gcd.js';
import cliProgression from './src-games/cli-progression.js';

export const brainGreet = () => {
  greeter();
};

export const brainEven = () => {
  cliEven();
};

export const brainCalc = () => {
  cliCalc();
};

export const brainGcd = () => {
  cliGcd();
};

export const brainProgression = () => {
  cliProgression();
};
