import Todo from "./Todo";

//latihan menggunakan collection component, jadi props-nya dikonversi ke dalam array kemudian di-map menggunakan rest parameter dengan function map()
const dataTodo = [
  {
    id: 1,
    text: "Belajar HTML",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Belajar CSS",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Belajar JS",
    isCompleted: true,
  },
  {
    id: 4,
    text: "Belajar ReactJS",
    isCompleted: false,
  },
  {
    id: 5,
    text: "Belajar Framer Motion",
    isCompleted: false,
  },
]
//ditambahkan id sebagai key
const myTodos = dataTodo.map((todo) => <Todo key={todo.id} {...todo}/>)

export default function TodoList() {
  return (
    // <ul>
    //   <Todo isDeleted={true} text="Belajar HTML"></Todo>
    //   <Todo isCompleted={true} text="Belajar CSS"></Todo>
    //   <Todo isCompleted={true} text="Belajar JS"></Todo>
    //   <Todo isCompleted={false} text="Belajar React"></Todo>
    // </ul>
    <ul>
      {myTodos}
    </ul>
  );
}
