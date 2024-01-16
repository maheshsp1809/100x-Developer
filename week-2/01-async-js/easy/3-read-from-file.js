// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
const fs = require("fs");

// Function to read the contents of a file and print them to the console
const readAndPrintFile = (filePath) => {
  fs.readFile(filePath, "utf8", callback);
};
function callback(err, data) {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("File Contents:", data);
    performExpensiveOperation();
  }
}

// Function simulating an increasingly expensive operation
const performExpensiveOperation = () => {
  // Simulating an expensive operation
  const startTime = Date.now();
  for (let i = 0; i < 100000000; i++) {
    // This loop is just an example of an expensive operation
    // It doesn't have any practical purpose
  }
  const endTime = Date.now();

  console.log(`Expensive operation took ${endTime - startTime} milliseconds`);
};

// Specify the path to your file (change this to the actual file path)
const filePath = "../../example.txt";

// Read and print the file contents
readAndPrintFile(filePath);
