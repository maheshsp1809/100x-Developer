import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions.
// Use useCallback to ensure that these functions are not recreated on every render.
// const Counter = () => {
//   return (
//     <div className="counter">
//       <button className="increment-button">
//         <h1>Increment</h1>
//       </button>
//       <button className="decrement-button">
//         <h1>Decrement</h1>
//       </button>
//     </div>
//   );
// };
export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  function handleIncrement() {
    console.log("Rendering increment");
    setCount(count + 1);
  }

  function handleDecrement() {
    console.log("Rendering decrement");
    setCount(count);
  }
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      {/* <Counter /> */}
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
