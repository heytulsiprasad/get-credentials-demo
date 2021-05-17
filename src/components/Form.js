import React, { useState } from "react";
import { auth } from "./../firebase";

const Form = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setError(null);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Login
  const submitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    setError(null);

    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (err) {
        setError(err);
        throw err;
      }
    }
  };

  // Signup
  const signUpHandler = async (e) => {
    const { email, password } = values;
    setError(null);

    if (email && password) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
      } catch (err) {
        setError(err);
        throw err;
      }
    }
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
        <div style={{ display: "inline" }}>
          <button
            style={{
              maxWidth: "max-content",
              marginTop: "1rem",
              marginRight: "1rem",
            }}
            onClick={submitHandler}
            type="submit"
          >
            Log In
          </button>
          <button
            style={{ maxWidth: "max-content", marginTop: "1rem" }}
            type="button"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div style={{ color: "blue" }}>
        {values && (
          <pre>
            <code>{JSON.stringify(values, null, 4)}</code>
          </pre>
        )}
      </div>
      <div style={{ color: "red" }}>
        {error && (
          <pre>
            <code>{JSON.stringify(error, null, 4)}</code>
          </pre>
        )}
      </div>
    </>
  );
};

export default Form;
