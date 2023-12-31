/* eslint-disable import/extensions */
import redlineSync from 'readline-sync';
import getRandomNumber from './src-for-game/getRandomNumber.js';

const isEven = (num) => num % 2 === 0;
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let correctAns = 0;
  let userAns = 0;
  let winCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (userAns === correctAns) {
    const randInt = getRandomNumber();
    console.log(`Question: ${randInt}`);
    userAns = redlineSync.question('Your answer: ');
    correctAns = isEven(randInt) ? 'yes' : 'no';
    if (userAns === correctAns) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    if (winCount === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
