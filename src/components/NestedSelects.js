import React, { useState } from "react";
import SelectList from "./SelectList";

const NestedSelects = () => {
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");

  return (
    <div>
      <h2>NestedSelects</h2>
      <h3>Countries</h3>
      <SelectList
        label="country"
        url="https://www.universal-tutorial.com/api/countries"
        handleChange={(e) => {
          setPais(e.target.value);
        }}
      />

      {pais && (
        <SelectList
          label="state"
          url={`https://www.universal-tutorial.com/api/states/${pais}`}
          handleChange={(e) => {
            setEstado(e.target.value);
          }}
        />
      )}

      {estado && (
        <SelectList
          label="city"
          url={`https://www.universal-tutorial.com/api/cities/${estado}`}
          handleChange={(e) => {
            setCiudad(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {pais} - {estado} - {ciudad}
        </code>
      </pre>
    </div>
  );
};

export default NestedSelects;
