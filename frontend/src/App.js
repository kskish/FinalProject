import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Confirmation from "./components/Confirmation";
import DeleteConfirmation from "./components/DeleteConfirmation";
import NewPlace from "./components/NewPlace";
import UpdatePlace from "./components/UpdatePlace";
import UserPlaces from "./components/UserPlaces";
import MainNavigation from "./components/MainNavigation";
import Auth from "./components/Auth";
import Users from "./components/Users";
import { CurrentUserProvider } from "./components/context/AuthContext";
import Homepage from "./components/Homepage";
import Registration from "./components/Registration";

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/locations" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </CurrentUserProvider>
    // </AuthContext.Provider>
  );
};

export default App;
