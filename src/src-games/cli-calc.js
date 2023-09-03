/* eslint-disable import/named */
/* eslint-disable import/extensions */
import redlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import getRandomOperator from './getRandomOperator.js';
import calculateExpressionForCalc from './calculateExpressionForCalc.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let corrAns = 0;
  let userAns = 0;
  let winCount = 0;
  while (String(userAns) === String(corrAns)) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    console.log(`Question: ${num1} ${operator} ${num2}`);
    corrAns = calculateExpressionForCalc(num1, num2, operator);
    userAns = redlineSync.question('Your answer: ');
    if (userAns === String(corrAns)) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${corrAns}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    if (winCount === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
