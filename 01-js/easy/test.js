// Sample asynchronous operations
function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("Async operation 1 completed");
    callback("result1");
  }, 1000);
}

function asyncOperation2(data, callback) {
  setTimeout(() => {
    console.log("Async operation 2 completed with data:", data);
    callback("result2");
  }, 1000);
}

function asyncOperation3(data, callback) {
  setTimeout(() => {
    console.log("Async operation 3 completed with data:", data);
    callback("result3");
  }, 1000);
}

// Main function with nested callbacks
function executeOperations() {
  asyncOperation1((result1) => {
    asyncOperation2(result1, (result2) => {
      asyncOperation3(result2, (result3) => {
        console.log("All async operations completed with result:", result3);
        // Continue with result3 or perform further actions here
      });
    });
  });
}

// Call the main function
executeOperations();
