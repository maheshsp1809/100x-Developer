// wait.js

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

/**
 * The wait function simulates an asynchronous API call and returns a promise that resolves with "hi"
 * after a specified delay, or rejects with an error message if the delay is less than or equal to 0.
 * @param n - The parameter `n` represents the number of seconds to wait before resolving the promise.
 * @returns The `wait` function is returning a Promise.
 */
function wait(n) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      if (n > 0) {
        resolve("hi");
      } else {
        reject(new Error("User not found"));
      }
    }, n * 1000); // Delay for demonstration
  });
}
// main.js

// Import the wait function

// Call the wait function with a specified delay (e.g., 5 seconds)
wait(5)
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error.message);
  });

module.exports = wait;
// before promises callbacks were used.
function fetchUserData(userId, callback) {
  // Simulate asynchronous API call
  setTimeout(() => {
    if (userId === 123) {
      callback({ name: "John Doe", age: 30 }); // Successful result
    } else {
      callback(new Error("User not found")); // Error
    }
  }, 2000); // Delay for demonstration
}

fetchUserData(1234, (data) => {
  console.log("User data:", data);
});
