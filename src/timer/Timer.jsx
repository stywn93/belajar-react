import { useRef, useState } from "react"
import { produce } from "immer"

export default function Timer() {
  const [start, setStart] = useState(null)
  const [now, setNow] = useState(null)
  const [elapsed, setElapsed] = useState(0)
  const timer = useRef(null)
  const [text, setText] = useState("Start")
  const timeRecord = []

  function handleLap(){
    const lapTime = elapsed + now - start
    console.info(`Lap : ${lapTime} ms`)
  }

  function handleStart() {
    const sekarang = Date.now()
    setStart(sekarang)
    setNow(sekarang)
    timer.current = setInterval(() => {
      setNow(Date.now())
    }, 100)
    setText("Pause")
  }

  function handleStop(){
    clearInterval(timer.current)
    console.info(`State Elapsed = ${elapsed}`)
    setElapsed(oldElapsed => {
      const updated = oldElapsed + (now - start)
      console.info(`Now = ${now}, Start = ${start}, Old Elapsed = ${oldElapsed}, New Elapsed = ${updated}`)
      return updated
    })
    console.info(`New Elapsed = ${elapsed}`)
    setStart(null)
    setText("Start")
  }
  
  function handleReset(){
    clearInterval(timer.current)
    setStart(null)
    setNow(null)
    setElapsed(0)
    setText("Start")
    console.clear()
  }

  let timePassed = 0
  if(start && now){
    // console.info(`Elapsed = ${elapsed}`)
    timePassed = elapsed + (now - start)
  } else {
    timePassed = elapsed
  }

  return (
    <>
      <h1>Timer : {timePassed} ms</h1>
      <button onClick={handleLap} disabled={start === null}>Lap</button>
      <button onClick={text == "Start" ? handleStart : handleStop}>{text}</button>
      <button onClick={handleReset} disabled={elapsed === 0 && start === null}>Reset</button>
    </>
  );
}
