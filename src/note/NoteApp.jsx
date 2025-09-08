import NoteList from "./NoteList"
import NoteForm from "./NoteForm"
import { useImmer } from "use-immer"

let id = 0
const initialNotes = [
  {id: id++, text: "Learn HTML", done:true},
  {id: id++, text: "Learn CSS", done:true},
  {id: id++, text: "Learn JS", done:true},
  {id: id++, text: "Learn React", done:false},
]
export default function NoteApp() {
  const [notes, setNotes] = useImmer(initialNotes)

  function handleAddNote(text) {
    setNotes((draft) => {
      draft.push({
        id: id++,
        text: text,
        done: false,
      });
    });
  }

  function handleChangeNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id)
      draft[index] = note
    });
  }

  function handleDeleteNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id)
      draft.splice(index, 1)
    });
  }

  return (
    <>
      <h1>Note App</h1>
      <NoteForm onAddNote = {handleAddNote}></NoteForm>
      <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
    </>
  );
}
