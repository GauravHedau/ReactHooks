import React, { useState } from 'react';

function App() {
  // Declare a state variable using useState hook
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Hooks Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
