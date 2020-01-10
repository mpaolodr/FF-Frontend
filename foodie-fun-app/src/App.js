import React, { useState } from "react";
// MARK: -- Custom Components
import { Route, Switch, NavLink as RouteLink } from "react-router-dom";
import PrivateRoute from "./components/Navigation/PrivateRoute";
import { Signup, Login, Logout } from "./components/Authentication";
import { Profile } from "./components/Profile";

import Restaurants from "./components/Restaurants/Restaurants";
import AddRestaurant from "./components/Restaurants/AddRestaurant";
import Restaurant from "./components/Restaurants/Restaurant";
import EditRestaurant from "./components/Restaurants/EditRestaurant";

import { Navigation } from "./components/Navigation";

import { AddReview, EditReview } from "./components/Reviews";
import { AddRating, EditRating } from "./components/Rating";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
// MARK: -- Bootstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

function App() {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

  return (
  		<div>
			<Router>
			<Navigation />
    		<Switch>
      			<Route exact path="/" component={Signup} />
      			<Route path="/login" component={Login} />
				<PrivateRoute path="/profile" component={Profile} />
				<PrivateRoute exact path="/explore" component={Restaurants} />
				<PrivateRoute path="/add-restaurant" component={AddRestaurant} />
				<PrivateRoute path="/add-review" component={AddReview} />
				<PrivateRoute path="/add-rating" component={AddRating} />
				<PrivateRoute path="/restaurant/:id" component={EditRestaurant} />
				<PrivateRoute path="/edit-review" component={EditReview}/>
				<PrivateRoute path="/edit-rating" component={EditRating}/>
				<PrivateRoute path="/explore/" component={Restaurant} />
				<PrivateRoute path="/logout" component={Logout} />
			</Switch>
    		</Router>
    	</div>
  );
}

export default App;
