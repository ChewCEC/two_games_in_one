import { useState } from 'react'

export default function Amorcito() {
  const [accepted, setAccepted] = useState(false)
  const [noButtonStyle, setNoButtonStyle] = useState({})

  const handleNoClick = () => {
    // Obtener las dimensiones de la ventana
    const windowWidth = window.innerWidth - 100 // Restamos 100px para el ancho del botón
    const windowHeight = window.innerHeight - 50 // Restamos 50px para el alto del botón

    // Generar posiciones aleatorias dentro de los límites de la pantalla
    const randomX = Math.floor(Math.random() * windowWidth)
    const randomY = Math.floor(Math.random() * windowHeight)

    // Actualizar la posición del botón
    setNoButtonStyle({
      position: 'fixed',
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: 'all 0.3s ease'
    })
  }

  const handleYesClick = () => {
    setAccepted(true)
  }

  if (accepted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="text-4xl font-bold text-pink-500 animate-bounce">
          ❤️ Eres mi amorcito ❤️
        </div>
        <div className="text-2xl text-pink-400">
          Te quiero mucho
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-8">
        ¿Quieres ser mi amorcito?
      </h3>
      <div className="flex gap-4">
        <button
          onClick={handleYesClick}
          className="px-8 py-4 bg-pink-500 text-white rounded-lg text-xl hover:bg-pink-600 transition-colors transform hover:scale-110"
        >
          Sí
        </button>
        <button
          onClick={handleNoClick}
          style={noButtonStyle}
          className="px-8 py-4 bg-gray-500 text-white rounded-lg text-xl hover:bg-gray-600 transition-colors"
        >
          No
        </button>
      </div>
    </div>
  )
}
