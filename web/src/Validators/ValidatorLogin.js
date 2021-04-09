import history from "../Configuration/History";
import setUser from "../Configuration/SetUser"

export const ValidatorLogin = (response,email) => {
  if (response.data.success == "true") {
    localStorage.setItem("login", true);
    setUser(email);

    history.push("/task");

  } else alert("There is no such account or wrong password");
};
