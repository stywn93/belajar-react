import { createRoot } from "react-dom/client";
import HW from "./HelloWorld.jsx";
import Container from "../container/Container.jsx";
import { StrictMode } from "react";
import TodoList from "../todo-list/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <Container>
        <HW/>
        <TodoList/>
        <Table/>
        <AlertButton text="Click Me"/>
        <Counter/>
      </Container>
    </StrictMode>
  </>
);