const globalUrl = "http://localhost:8080/";
const loginUrl = globalUrl + "login";
const registerUrl = globalUrl + "addUser/"
const getInfoAboutUserByEmail = globalUrl + "user?email=";
const getTasksByIdUser = globalUrl + "getTasks/";
const addTask = globalUrl + "addTask/"
const deleteTask = globalUrl + "task/"
const updateTask = globalUrl + "updateTask/"

export default{
    loginUrl,
    registerUrl,
    getInfoAboutUserByEmail,
    getTasksByIdUser,
    addTask,
    deleteTask,
    updateTask,
}