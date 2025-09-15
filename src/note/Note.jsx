import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(NotesDispatchContext)
  let component;

  function handleChangeText(e) {
    // const newNote = { ...note, text: e.target.value };
    // onChange(newNote);
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value
    })
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
      {note.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }

  function handleChangeDone(e){
    // const newNote = {...note, done: e.target.checked}
    // onChange(newNote)
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked
    })
  }

  function handleDelete(){
    dispatch({
      type: "DELETE_NOTE",
      text: note.id
    })
  }

  return(
    <label>
      <input type="checkbox" checked= {note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  )
}
