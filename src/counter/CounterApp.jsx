import { useState } from "react"
import Counter from "./Counter.jsx"

export default function CounterApp(){
  const [show2, setShow2] = useState(true)
  function handleChange(e){
    setShow2(e.target.checked)
  }

  return(
    <>
      <br />
      {show2 ? <Counter/> : <p>Hilang</p>}
      <input type="checkbox" onChange={handleChange} checked={show2}/>Tampilkan    
    </>
  )
}