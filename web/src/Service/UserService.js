import axios from "axios";
import Addresses from "../Configuration/Addresses";
import { ValidatorLogin } from "../Validators/ValidatorLogin";
import { ValidatorRegister } from "../Validators/ValidatorRegister";

const headers = {
  "Content-Type": "application/json",
};

const userService = {
  login,
  logout,
  registration,
};

function login(email, password) {
  const data = {
    email: email,
    password: password,
  };

  axios
    .post(Addresses.loginUrl, data, {
      headers: headers,
      withCredentials: true,
    })
    .then((res) => ValidatorLogin(res, email))
    .catch((err) => console.log(err));
}

function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("user");
  window.location.reload();
}

function registration(email, name, surname, password, passwordR) {
  if (password != passwordR) alert("Mismatched passwords");
  else {
    const data = {
      email: email,
      password: password,
      name: name,
      surname: surname,
    };

    axios
      .post(Addresses.registerUrl, data, {
        headers: headers,
        withCredentials: true,
      })
      .then((res) => ValidatorRegister(res))
      .catch((err) => console.log(err));
  }
}

export default userService;
