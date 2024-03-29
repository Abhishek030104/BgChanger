import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  const handleClick = (newColor) => {
    // console.log(newColor)
    setColor(newColor)
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'green' }}
            onClick={() => handleClick('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'red' }}
            onClick={() => handleClick('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'pink' }}
            onClick={() => handleClick('pink')}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'black' }}
            onClick={() => handleClick('black')}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-red"
            style={{ backgroundColor: '#ffef00' }}
            onClick={() => handleClick('#ffef00')}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'brown' }}
            onClick={() => handleClick('brown')}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-red"
            style={{ backgroundColor: '#add8e6' }}
            onClick={() => handleClick('#add8e6')}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
