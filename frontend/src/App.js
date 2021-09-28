import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Confirmation from "./places/components/Confirmation";
import DeleteConfirmation from "./places/components/DeleteConfirmation";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/MainNavigation";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import {
  AuthContext,
  CurrentUserProvider,
} from "./shared/components/context/AuthContext";
import Homepage from "./user/pages/Homepage";
import GlobalStyles from "./shared/components/GlobalStyles";
import Registration from "./user/pages/Registration";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    // <AuthContext.Provider
    // value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    // >
    <CurrentUserProvider>
      <Router>
        {/* <GlobalStyles /> */}
        <MainNavigation />
        <Switch>
          {/* Homepage, Display all users */}
          <Route path="/" exact>
            {/* <Users /> */}
            <Homepage />
          </Route>
          <Route path="/locations" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          {/* Page to add new location */}
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Route path="/confirmation/:id" exact>
            <Confirmation />
          </Route>
          <Route path="/places/:placeId/delete" exact>
            <DeleteConfirmation />
          </Route>
          <Route path="/authenticate" exact>
            <Auth />
          </Route>
          <Route path="/registration" exact>
            <Registration />
          </Route>
          {/* Redirect any unknown pages back to homepage. */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </CurrentUserProvider>
    // </AuthContext.Provider>
  );
};

export default App;
