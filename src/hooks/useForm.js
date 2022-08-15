import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, formValidations) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(formValidations(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(formValidations(form));

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);

      helpHttp().post('https://formsubmit.co/ajax/diegoegj14@gmail.com', {
        body: form,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then(() => {
        setIsLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => {
          setResponse(null);
        }, 3000);
      })
    }
  };


  return {
    form,
    errors,
    isLoading,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};
