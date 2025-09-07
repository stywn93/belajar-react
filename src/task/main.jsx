import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Task from "./Task.jsx"
import Tasks from "./Tasks.jsx"

createRoot(document.getElementById("root"))
.render(
  <StrictMode>
    <Task></Task>
    <Tasks/>
  </StrictMode>
)