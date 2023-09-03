/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import redlineSync from 'readline-sync';
import getRandomNumber from './src-for-game/getRandomNumber.js';
import findGCD from './src-for-game/findGCD.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let winCount = 0;
  let userAns = 0;
  let corrAns = 0;
  while (corrAns === parseInt(userAns, 10)) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    corrAns = findGCD(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    userAns = redlineSync.question('Your answer: ');

    if (String(corrAns) === userAns) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${corrAns}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (winCount === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
