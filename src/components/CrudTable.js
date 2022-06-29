import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ myData }) => {
  return (
    <div>
      <h3>Datatable</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myData.length === 0 ? (
            <tr>
              <td colSpan="3">There is no data</td>
            </tr>
          ) : (
            myData.map((el) => <CrudTableRow key={el.id} element={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
