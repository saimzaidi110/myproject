import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stdcount, setstdCount] = useState(0)
    useEffect(() => {

setstdCount(stdcount+1)

    },[count])

  return (
    <>
      <p>Student Count:{stdcount}</p>
      <p>count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default App
