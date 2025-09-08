import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mike Hunacek</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="muted-text">
        This is just the empty app created for react app.  More content coming soon...
      </p>
    </>
  )
}

export default App
