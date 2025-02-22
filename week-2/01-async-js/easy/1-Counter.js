// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second.

// setInterval(callback, delay, arg1, arg2, ...)

const k = (count) => {
  console.log(count);
};
const Counter1 = (count) => {
  setInterval(() => {
    count += 1;
    k(count);
  }, 1000);
};
Counter1(0);
