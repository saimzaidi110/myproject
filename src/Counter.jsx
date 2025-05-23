import React, {useState} from "react";

export default function Counter() {

let [count,setCount]=useState(0)
function increment(value){
    setCount(count+1)
    console.log(count)
}

function decerement(value){
    setCount(count-1)
    console.log(count)
}

  return (
    <div>
        <h1>Counter App</h1>
        <h4>count is:{count}</h4>
        <button onClick={increment}>Increment</button>
           <button onClick={decerement}>Decerment</button>
    </div>
  )
}
