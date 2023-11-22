import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleHover = () => setCount(count + 1);

  // Edit this component
  return (
    <div>
      <button data-testid="button" onMouseEnter={handleHover}>
        Hover Me
      </button>
      <h1 data-testid="count">{count}</h1>
    </div>
  );
};

export default App;
