/* eslint-disable import/extensions */
import redlineSync from 'readline-sync';
import generateProgression from './src-for-game/generateProgression.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let winCount = 0;
  let userAns = 0;
  let corrAns = 0;

  while (parseInt(userAns, 10) === corrAns) {
    const arrOfNums = generateProgression();
    const missNum = Math.floor(Math.random() * (arrOfNums.length));
    corrAns = arrOfNums[missNum];
    arrOfNums[missNum] = '..';
    console.log(`Question: ${arrOfNums.join(' ')}`);
    userAns = redlineSync.question('Your answer ');
    if (parseInt(userAns, 10) === corrAns) {
      console.log('Correct!');
      winCount += 1;
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
