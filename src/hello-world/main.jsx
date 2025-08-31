import { createRoot } from "react-dom/client";
import { HeaderHelloWorld, ParagraphHelloWorld } from "./HelloWorld.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <HeaderHelloWorld />
    <ParagraphHelloWorld />
  </>
);