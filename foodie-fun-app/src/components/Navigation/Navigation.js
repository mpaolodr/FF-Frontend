import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Signup, Login, Logout } from "../Authentication";
import { Profile } from "../Profile";
import { Restaurants } from "../Restaurants";
import { NavLink, Route } from "react-router-dom";

export const Navigation = () => {
	return (

		<div>
			<NavLink to="/">Foodie Fun</NavLink>
			<NavLink to="/profile">Profile</NavLink>
			<NavLink to="/restaurants">Restaurants</NavLink>
			<NavLink to="/login">Log In</NavLink>
			<NavLink to="/signup">Sign Up</NavLink>
			<NavLink to="/logout">Log out</NavLink>

			<Route exact path="/" />
			<Route path="/profile" component={Profile} />
			<Route path="/restaurants" render={props => {return <Restaurants {...props} />}}/>
			<Route path="/login" render={props => {return <Login {...props} />}}/>
			<Route path="/signup" render={props => {return <Signup {...props} />}}/>
			<Route path="/logout" component={Logout} />
		</div>

	)
}