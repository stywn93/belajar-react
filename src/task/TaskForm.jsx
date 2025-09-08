import { useState } from "react"

export default function TaskForm({setItems}){
  const [item, setItem] = useState("")

  function handleChange(e){
    setItem(e.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    // onSubmit(item)
    setItems(draft => {
      draft.push(item)
    })
    setItem("")
  }

  return(
    <>
    <form action="">
      <input value={item} type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </form>
    </>
  )
}