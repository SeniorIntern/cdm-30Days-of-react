import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleParaView = () => setIsVisible(!isVisible);

  return (
    <>
      <button id="toggle-btn" onClick={toggleParaView}>
        Toggle View
      </button>
      {isVisible && (
        <p id="my-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas
          voluptas dicta quaerat iure fugit soluta libero officia dolorem quo
          nam, voluptates obcaecati eos debitis? Sint repudiandae culpa eaque
          optio?
        </p>
      )}
    </>
  );
}

export default App;
