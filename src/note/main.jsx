import NoteApp from "./NoteApp";
import { StrictMode } from "react";
import {createRoot} from "react-dom/client"


createRoot(document.getElementById("root"))
.render
(
  <StrictMode>
    <NoteApp/>
  </StrictMode>
)