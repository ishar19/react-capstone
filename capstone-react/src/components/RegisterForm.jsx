import { useState } from "react";
export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 12,
        width: "40vw",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={formValues.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Username"
        value={formValues.username}
        onChange={handleChange}
        name="username"
      />
      <input
        type="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
        name="email"
      />
      <input
        type="text"
        placeholder="Mobile"
        value={formValues.mobile}
        onChange={handleChange}
        name="mobile"
      />
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value={formValues.checkbox}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">
          Share my registration data with Superapp
        </label>
      </div>
      <button>Sign Up</button>
    </div>
  );
}
