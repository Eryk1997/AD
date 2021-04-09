import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

import Login from "./Views/Login/Login"
import Register from "./Views/Register/Register"
import Task from "./Views/Task/Task"
import NotFoundPage from "./Views/NotFoundPage/NotFoundPage"

import { ProtectedRoute } from "./Configuration/ProtectedRoute"

function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <Switch> 
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Register} />
        <ProtectedRoute path="/task" component={Task} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
