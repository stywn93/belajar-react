import { Children } from "react";

export default function Container({ children }) {
  return (
    <>
      <h1>Belajar ReactJS</h1>
      {children}
      <footer>Copyright 2025</footer>
    </>
  );
}
