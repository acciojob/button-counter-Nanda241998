import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      <p>Button clicked {count} times.</p>
    </div>
  );
}

export default App;
