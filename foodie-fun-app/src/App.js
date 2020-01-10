import React, { useState } from "react";
// MARK: -- Custom Components
import { Route, Switch, NavLink as RouteLink } from "react-router-dom";
import PrivateRoute from "./components/Navigation/PrivateRoute";
import { Signup, Login, Logout } from "./components/Authentication";
import { Profile } from "./components/Profile";
import { Restaurants, Restaurant, AddRestaurant, EditRestaurant } from "./components/Restaurants";
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
    		<Switch>
      			<Route exact path="/" component={Signup} />
				<Route path="/profile" component={Profile} />
				<Route path="/add-restaurant" component={AddRestaurant} />
				<Route path="/add-review" component={AddReview} />
				<Route path="/add-rating" component={AddRating} />
				<Route path="/edit-restaurant" component={EditRestaurant} />
				<Route path="/edit-review" component={EditReview}/>
				<Route path="/edit-rating" component={EditRating}/>
				<Route exact path="/explore" component={Restaurants} />
				<Route path="/explore/:id" component={Restaurant} />
				<Route path="/login" component={Login} />
				//<Route path="/signup" component={Signup} />
				<PrivateRoute path="/logout" />
			</Switch>
    		</Router>
    	</div>
  );
}

export default App;
