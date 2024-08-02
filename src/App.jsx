import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Keyboard from "./KeyBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Keyboard />
      </div>
    </>
  );
}

export default App;
