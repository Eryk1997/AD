import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from '../../Service/UserService'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [passwordR, setPasswordR] = useState("");


  const handleSubmit = () => {
    userService.registration(email,name,surname,password,passwordR);
  };

  return(
  <div className="text-warning mt-5">
    <p className="m-0">Email</p>
    <p>
      <input
        placeholder="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </p>

    <p className="m-0">Name</p>
    <p>
      <input
        placeholder="name "
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
    </p>

    <p className="m-0">Surname</p>
    <p>
      <input
        placeholder="surname"
        type="text"
        onChange={(e) => setSurname(e.target.value)}
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

    <p className="m-0">Repeat Password</p>
    <p>
      <input
        placeholder="repeat password"
        type="password"
        onChange={(e) => setPasswordR(e.target.value)}
      />
    </p>

    <p>
        <button
          onClick={handleSubmit}
          className="btn col-2 mr-4 mt-2 btn-outline-warning"
        >
          Registration
        </button>
      </p>
      <Link id="padding-buttons" to="/">
        <button type="button" className="btn col-2 mt-2 btn-outline-warning">
          Login
        </button>
      </Link>

  </div>
  );
}
