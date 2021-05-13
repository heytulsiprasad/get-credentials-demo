import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({});

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        noValidate
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="email">
          Email{" "}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="password">
          Password{" "}
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
        </label>
        <button
          style={{ maxWidth: "max-content", marginTop: "1rem" }}
          type="submit"
        >
          Done
        </button>
      </form>
      <div style={{ color: "blue" }}>
        {values && (
          <pre>
            <code>{JSON.stringify(values, null, 4)}</code>
          </pre>
        )}
      </div>
    </>
  );
};

export default Form;
