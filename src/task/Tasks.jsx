
import { useImmer } from "use-immer"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export default function Tasks(){
  const [items, setItems] = useImmer([])

  // function handleOnSubmit(item){
  //   setItems(draft => {
  //     draft.push(item)
  //   }
  //   )
  // }

  //kita coba konsep kedua agar di sini lebih rapi, maka setItems kita kirim ke Task Form
  //caranya adalah mengirim setItems ke dalam props

  return(
    <>
    <TaskForm setItems={setItems}/>
    <TaskList items = {items}/>
    </>
  )
}