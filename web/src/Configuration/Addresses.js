const globalUrl = "http://localhost:8080/";
const loginUrl = globalUrl + "login";
const registerUrl = globalUrl + "users/"
const getInfoAboutUserByEmail = globalUrl + "userEmail/";
const getTasksByIdUser = globalUrl + "tasks/";
const addTask = globalUrl + "tasks/"
const deleteTask = globalUrl + "tasks/"
const updateTask = globalUrl + "tasks/"

export default{
    loginUrl,
    registerUrl,
    getInfoAboutUserByEmail,
    getTasksByIdUser,
    addTask,
    deleteTask,
    updateTask,
}