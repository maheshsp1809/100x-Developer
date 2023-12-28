// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.
// There is a hint at the bottom of the file if you get stuck.
// use setTimeout only
// function Counter(count) {
//   setTimeout(() => {
//     console.log(count);
//     Counter(count + 1); // Recursive call to repeat after 1 second
//   }, 1000);
// }

// Counter(0);

// Using setTimeout
const timeoutId = () => {
  setTimeout(() => {
    console.log("This will be executed once after 2000 milliseconds");
  }, 2000);
};

timeoutId();
// Clear the timeout before it executes
clearTimeout(timeoutId);

// Using setInterval
const intervalId = setInterval(() => {
  console.log("This will be executed every 1000 milliseconds");
}, 1000);

// Clear the interval after 5000 milliseconds (5 seconds)
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
