import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ label, url, handleChange }) => {
  const { data, error, isLoading } = useFetch(url);
  console.log(data, error, isLoading);

  if (!data) return null;
  if (error) {
    return (
      <Message
        message={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${label}`;
  let title = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      {isLoading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Select a {label}</option>
        {data &&
          data.map((element) => (
            <option value={element[`${label}_name`]}>
              {element[`${label}_name`]}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectList;
