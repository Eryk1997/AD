import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("login") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );