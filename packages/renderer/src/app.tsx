import React, {useState} from "react";
import "./app.css"

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={"app-wrapper"}>
      <h1>Hello Vite + React!</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App
