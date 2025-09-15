import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useImmer, useImmerReducer } from "use-immer";
import { act, useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JS", done: true },
  { id: id++, text: "Learn React", done: false },
];
/*
function notesReducer(notes, action){
  switch (action.type) {
    case "ADD_NOTE":
      return[
        ...notes,
        {
          id: id++,
          text: action.text,
          done: false
        }
      ]
    case "CHANGE_NOTE":
      return notes.map((note) => note.id === action.id ? {...note, text : action.text, done:action.done} : note)
    case "DELETE_NOTE":
      return notes.filter(note => note.id !== action.id)
    default:
      return notes
  }
}
*/

function notesReducer(draft, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
      break;
    }
    case "CHANGE_NOTE": {
      const i = draft.findIndex((note) => note.id === action.id);
      draft[i].text = action.text;
      draft[i].done = action.done;
      break;
    }
    case "DELETE_NOTE": {
      const i = draft.findIndex((note) => note.id === action.id);
      draft.splice(i, 1);
      break;
    }
    default: {
      break;
    }
  }
}

export default function NoteApp() {
  // const [notes, setNotes] = useImmer(initialNotes)
  // const [notes, dispatch] = useReducer(notesReducer, initialNotes)
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  //ini adalah approach jika menggunakan useReducer
  /*
  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      ...note,
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }
  */

  /**
   * ini adalah function jika menggunakan useState
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


  */

  return (
    <>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm></NoteForm>
          <NoteList notes={notes} />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </>
  );
}
