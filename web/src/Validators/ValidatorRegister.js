import history from "../Configuration/History";

export const ValidatorRegister = (response) => {
    if (response.data.length == 0) {
  
      history.push("/");
      document.location.reload();
      alert("Correct create user")
  
    } else alert(response.data);
  };
  