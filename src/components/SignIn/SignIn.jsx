import React, { useState } from "react";
import FormInput from "components/FormInput";
import Button from "components/Button";

import { signInWithGoogle, auth } from "../../firebase";

import "./SignIn.scss";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = form;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setForm({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          name="email"
          type="email"
          value={form.email}
          required
          label="Email"
        />
        <FormInput
          onChange={handleChange}
          name="password"
          type="password"
          value={form.password}
          label="Password"
          required
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button
            btnGoogle
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
