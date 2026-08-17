import { useState } from 'react'
import './index.css'
import { ModeToggle } from './components/theme-toggle.jsx'
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <ModeToggle />
      <div>
        <button
          className="w-24 h-10 rounded-lg border bg-black text-white dark:bg-white dark:text-black"
          onClick={() => setCount(count + 1)}
        >
          Count {count}
        </button>
      </div>
    </div>
  );
}

export default App;
