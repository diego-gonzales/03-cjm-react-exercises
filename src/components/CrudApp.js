import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Pikachu",
    type: "Thunder",
  },
  {
    id: 2,
    name: "Bulbasaur",
    type: "Plant",
  },
  {
    id: 3,
    name: "Charmander",
    type: "Fire",
  },
  {
    id: 4,
    name: "Squirtle",
    type: "Water",
  },
  {
    id: 5,
    name: "Mewtwo",
    type: "Psychic",
  },
];

const CrudApp = () => {
  const [data, setData] = useState(initialDB);

  return (
    <>
      <h1>CRUD App</h1>
      <CrudForm />
      <CrudTable myData={data} />
    </>
  );
};

export default CrudApp;
