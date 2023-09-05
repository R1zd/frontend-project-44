/* eslint-disable import/extensions */
import redlineSync from 'readline-sync';
import isPrime from './src-for-game/isPrime.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let winCount = 0;
  let userAns = 0;
  let corrAns = 0;

  while (userAns === corrAns) {
    const ans = Math.floor(Math.random() * 10) + 1;
    corrAns = isPrime(ans) === true ? 'yes' : 'no';
    console.log(`Question: ${ans}`);
    userAns = redlineSync.question('Your answer: ');
    if (userAns === corrAns) {
      winCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAns} is wrong answer ;(. Correct answer was ${corrAns}`);
      console.log(`Let's try again, ${name}`);
    }
    if (winCount === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
