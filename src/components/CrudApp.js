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
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (newElement) => {
    // console.log(newData);
    newElement.id = Date.now();
    setData([...data, newElement]);
  };

  const updateData = (newElement) => {
    const newData = data.map((element) => element.id === newElement.id ? newElement : element);

    setData(newData);
  };

  const deleteData = (id) => {
    const newData = data.filter(element => element.id !== id);

    setData(newData);
  };

  return (
    <>
      <h1>CRUD App</h1>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        myData={data}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};

export default CrudApp;
