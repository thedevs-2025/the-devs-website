import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">Vite + React</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          count is {count}
        </button>
      </div>

      <p className="mt-6 text-gray-600 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
