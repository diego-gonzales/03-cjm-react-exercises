import React from "react";

const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {
  const { name, type, id } = element;

  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.type}</td>
      <td>
        <button type="button" onClick={() => setDataToEdit(element)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteData(element.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
