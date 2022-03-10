import React from "react";
import { useContext } from "react";
// Context
import { StudentsContext } from "../App";

export default function Form() {
  const studentsContext = useContext(StudentsContext);

  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {studentsContext.names.map((name, i) => {
          return <li key={name.name + i}>{name.name}</li>;
        })}
      </ul>
    </div>
  );
}
