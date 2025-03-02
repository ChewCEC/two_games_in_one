import { useState } from 'react'

export default function Calculadora() {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operation, setOperation] = useState(null)
  const [newNumber, setNewNumber] = useState(false)
  const [showingResult, setShowingResult] = useState(false)

  const handleNumber = (number) => {
    if (showingResult) {
      setDisplay(number)
      setExpression(number)
      setShowingResult(false)
    } else if (display === '0' || newNumber) {
      setDisplay(number)
      setExpression(expression + number)
      setNewNumber(false)
    } else {
      setDisplay(display + number)
      setExpression(expression + number)
    }
  }

  const handleOperation = (op) => {
    if (showingResult) {
      setExpression(display)
      setShowingResult(false)
    }
    
    const operationSymbol = {
      '+': ' + ',
      '-': ' - ',
      '*': ' × ',
      '/': ' ÷ '
    }

    if (operation && !newNumber) {
      handleEqual()
      setExpression(display + operationSymbol[op])
    } else {
      setExpression(expression + operationSymbol[op])
    }

    setFirstNumber(parseFloat(display))
    setOperation(op)
    setNewNumber(true)
  }

  const handleEqual = () => {
    if (!operation || newNumber) return

    const secondNumber = parseFloat(display)
    let result = 0

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case '*':
        result = firstNumber * secondNumber
        break
      case '/':
        result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error'
        break
      default:
        return
    }

    const finalResult = result.toString()
    setDisplay(finalResult)
    setExpression(expression + ' = ' + finalResult)
    setFirstNumber(null)
    setOperation(null)
    setNewNumber(true)
    setShowingResult(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setExpression('')
    setFirstNumber(null)
    setOperation(null)
    setNewNumber(false)
    setShowingResult(false)
  }

  const handleDecimal = () => {
    if (showingResult) {
      setDisplay('0.')
      setExpression('0.')
      setShowingResult(false)
      return
    }

    if (!display.includes('.')) {
      setDisplay(display + '.')
      setExpression(expression + '.')
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs mx-auto">
      {/* Display */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="text-right text-sm font-mono truncate text-gray-600 min-h-[1.5rem]">
          {expression}
        </div>
        <div className="text-right text-2xl font-mono truncate mt-1">
          {display}
        </div>
      </div>

      {/* Botones */}
      <div className="grid grid-cols-4 gap-2">
        {/* Primera fila */}
        <button
          onClick={handleClear}
          className="col-span-2 bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          C
        </button>
        <button
          onClick={() => handleOperation('/')}
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperation('*')}
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ×
        </button>

        {/* Números y operaciones */}
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperation('-')}
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          -
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperation('+')}
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          +
        </button>

        {/* Últimas dos filas */}
        <div className="col-span-4 grid grid-cols-4 gap-2">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEqual}
            className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors row-span-2"
          >
            =
          </button>
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            .
          </button>
        </div>
      </div>
    </div>
  )
}
