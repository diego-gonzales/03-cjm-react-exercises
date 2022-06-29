import React from "react";

const CrudTableRow = ({ element }) => {
  return (
      <tr>
        <td>{element.name}</td>
        <td>{element.type}</td>
        <td>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </td>
      </tr>
  );
};

export default CrudTableRow;
