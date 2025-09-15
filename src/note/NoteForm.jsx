import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

//ini jika tanpa menggunakan context
// export default function NoteForm({ onAddNote }) {
//kita coba menggunakan context
export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext)

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    // onAddNote(text);
    dispatch ({
      type: "ADD_NOTE",
      text: text
    })
  }

  return (
    <>
      <input placeholder="Add Note" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Tambahkan</button>
    </>
  );
}
