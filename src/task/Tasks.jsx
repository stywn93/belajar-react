
import { useImmer } from "use-immer"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export default function Tasks(){
  const [items, setItems] = useImmer([])

  function handleOnSubmit(item){
    setItems(draft => {
      draft.push(item)
    }
    )
  }

  return(
    <>
    <TaskForm onSubmit={handleOnSubmit}/>
    <TaskList items = {items}/>
    </>
  )
}