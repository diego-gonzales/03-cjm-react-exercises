import React, { useState } from "react";

const initialForm = {
  name: "",
  type: "",
  id: null,
};

const CrudForm = () => {
  const [myForm, setMyForm] = useState(initialForm);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Add</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={myForm.name}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={handleChange}
          value={myForm.type}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
