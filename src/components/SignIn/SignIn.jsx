import React, { useState } from "react";
import FormInput from "components/FormInput";
import Button from "components/Button";
import "./SignIn.scss";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
