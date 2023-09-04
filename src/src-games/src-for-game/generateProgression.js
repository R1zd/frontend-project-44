/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import getRandomNumber from "./getRandomNumber.js";

export default () => {
  const nums = Math.floor(Math.random() * 6) + 5;
  const arrOfNums = [];
  const plusProgression = getRandomNumber();
  let num = 0;
  for (let i = 0; i < nums && arrOfNums.length < 10; i += 1) {
    num += plusProgression;
    arrOfNums.push(num);
  }
  return arrOfNums;
};
