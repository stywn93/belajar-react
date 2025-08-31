import { createRoot } from "react-dom/client";
import HW from "./HelloWorld.jsx";
import Container from "../container/Container.jsx";
import { StrictMode } from "react";
import TodoList from "../todo-list/TodoList.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <Container>
        <HW/>
        <TodoList/>
      </Container>
    </StrictMode>
  </>
);