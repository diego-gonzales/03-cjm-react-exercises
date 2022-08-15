import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const formValidations = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name) {
    errors.name = `Name is required`;
  } else if (!regexName.test(form.name)) {
    errors.name = `Name is invalid`;
  }

  if (!form.email) {
    errors.email = `Email is required`;
  } else if (!regexEmail.test(form.email)) {
    errors.email = `Email is invalid`;
  }

  if (!form.subject) {
    errors.subject = `Subject is required`;
  }

  if (!form.comments) {
    errors.comments = `Comments is required`;
  } else if (!regexComments.test(form.comments)) {
    errors.comments = `Comments must be less than 255 characters`;
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    isLoading,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm(initialForm, formValidations);

  return (
    <div>
      <h2>Form contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {errors.name && (
            <small style={{ color: "#dc3545", fontWeight: "bold" }}>
              {errors.name}
            </small>
          )}
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>

        <div>
          {errors.email && (
            <small style={{ color: "#dc3545", fontWeight: "bold" }}>
              {errors.email}
            </small>
          )}
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>

        <div>
          {errors.subject && (
            <small style={{ color: "#dc3545", fontWeight: "bold" }}>
              {errors.subject}
            </small>
          )}
          <input
            type="text"
            name="subject"
            placeholder="Type the subject"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
        </div>

        <div>
          {errors.comments && (
            <small style={{ color: "#dc3545", fontWeight: "bold" }}>
              {errors.comments}
            </small>
          )}
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Type your comments"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
        </div>

        <input type="submit" value="Send" />
      </form>

      {isLoading && <Loader />}
      {response && <Message message="Data has been sent" bgColor="#198754" />}
    </div>
  );
};

export default ContactForm;
