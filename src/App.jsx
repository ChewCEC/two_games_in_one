"use client"

import { useState } from "react"
import "./App.css"
import Calculadora from "./components/calculadora"
import Amorcito from "./components/amorcito"

function App() {
  const [currentGame, setCurrentGame] = useState(null)

  const handleGameSelect = (game) => {
    setCurrentGame(game)
  }

  const handleBackToHome = () => {
    setCurrentGame(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {currentGame === null ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-10 text-gray-800">two games in one</h1>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleGameSelect("calculadora")}
              className="px-8 py-4 bg-blue-500 text-white rounded-lg text-xl hover:bg-blue-600 transition-colors"
            >
              Calculadora
            </button>
            <button
              onClick={() => handleGameSelect("amorcito")}
              className="px-8 py-4 bg-pink-500 text-white rounded-lg text-xl hover:bg-pink-600 transition-colors"
            >
              Amorcito
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <button
            onClick={handleBackToHome}
            className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
          >
            ← Volver
          </button>

          {currentGame === "calculadora" && (
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">Calculadora</h2>
              <Calculadora />
            </div>
          )}

          {currentGame === "amorcito" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">Amorcito</h2>
              <p className="text-center text-gray-600">
                <Amorcito/>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App

