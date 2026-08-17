import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Count {count}</h1>

      <div className="btn-group">
        <button onClick={() => setCount(count + 10)}>Increase</button>
        <button onClick={() => setCount(count - 10)}>Decrease</button>
      </div>
    </div>
  );
}
export default App;