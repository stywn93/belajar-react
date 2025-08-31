import Todo from "./Todo";

export default function TodoList(){
  return(
    <ul>
      <Todo isDeleted={true} text="Belajar HTML"></Todo>
      <Todo isCompleted={true} text="Belajar CSS"></Todo>
      <Todo isCompleted={true} text="Belajar JS"></Todo>
      <Todo isCompleted={false} text="Belajar React"></Todo>
    </ul>
  )
}