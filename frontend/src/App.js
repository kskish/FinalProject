import React from "react";
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
import { CurrentUserProvider } from "./shared/components/context/AuthContext";
import Homepage from "./user/pages/Homepage";
import Registration from "./user/pages/Registration";

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
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
