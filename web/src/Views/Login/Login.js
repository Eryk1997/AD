import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../Service/UserService";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    userService.login(email, password);
  };

  return (
    <div className="text-warning mt-5">
      <p className="m-0">Email</p>
      <p>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>

      <p className="m-0">Password</p>
      <p>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>

      <p>
        <button
          onClick={handleSubmit}
          className="btn col-2 mr-4 mt-2 btn-outline-warning"
        >
          Login
        </button>
      </p>
      <Link id="padding-buttons" to="/registration">
        <button type="button" className="btn col-2 mt-2 btn-outline-warning">
          Registration
        </button>
      </Link>
    </div>
  );
}
