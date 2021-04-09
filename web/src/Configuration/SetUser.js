import Addresses from "./Addresses"
import axios from "axios"

export default function setUser(email){
    axios.get(Addresses.getInfoAboutUserByEmail + email)
    .then(res => {
        let user = {
            id: res.data.id,
            name: res.data.name,
            surname: res.data.surname,
            email: res.data.email
        };
        window.localStorage.setItem("user", JSON.stringify(user));
        if(window.localStorage.getItem("user") != null)
            document.location.reload();
    })
}