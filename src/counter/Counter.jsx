import { useState } from "react";

export default function Counter()
{
  const [counter, setCounter] = useState(0)

  function handleClick(){
    setCounter(counter+1)
  }

  return(
    <>
    <h1>Increment = {counter}</h1>
    <button onClick={handleClick}>Increment</button>
    </>
  )
}