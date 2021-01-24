import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const UserContext = React.createContext({ loggedIn: false });
const UserProvider = UserContext.Provider;
localStorage.setItem("loggedIn", false);

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
      localStorage.setItem("loggedIn", true);
    } else {
      callback({ loggedIn: false });
      localStorage.setItem("loggedIn", false);
    }
  });
}

// Can we go simpler than that?
const App = () => {
  const [user, setUser] = useState({
    loggedIn: localStorage.getItem("loggedIn"),
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserProvider value={user}>
      <Router>
        <Switch>
          <PublicRoute authenticated={user.loggedIn} path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute exact authenticated={user.loggedIn} path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
};

const signOut = () => {
  console.log("logging out");
  console.log(firebase.auth().signOut());
};

const Home = () => {
  const user = useContext(UserContext);
  console.log("Home page:", user.loggedIn);

  return user.loggedIn ? (
    <div>
      <h1>Logged in</h1>
      <p>Email: {user.email}</p>

      <button onClick={signOut}>Sign Out</button>
    </div>
  ) : null;
};

const Login = () => {
  const user = useContext(UserContext);
  console.log("login page:", user.loggedIn);

  return (
    <Route
      render={(props) =>
        user.loggedIn === false ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1>Login using Google or Facebook: </h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            ></StyledFirebaseAuth>
          </div>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default App;
