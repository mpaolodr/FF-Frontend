import React, { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import { Signup, Login, Logout } from "../Authentication";
import { Profile } from "../Profile";
import { Restaurants, Restaurant, AddRestaurant, EditRestaurant } from "../Restaurants";
import { AddReview, EditReview } from "../Reviews";
import { NavLink as RouteLink, Route } from "react-router-dom";

import "../../App.css";

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

export const Navigation = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
 
	return (

		<div>
			<Navbar color="white" light expand="sm">
				<Container fluid={true}>
				<NavbarBrand>
					<RouteLink className="text-dark" to="/">
						<i className="fas fa-utensils fa-2x"></i>
					</RouteLink>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<RouteLink className="text-dark nav-column" to="/profile">
							<div><i className="far fa-user-circle"></i></div>Profile
							</RouteLink>
						</NavItem>
						<NavItem>
							<RouteLink className="text-dark nav-column" to="/explore">
							<div><i className="fas fa-compass"></i></div>Explore
							</RouteLink>
						</NavItem>
						<NavItem>
							<RouteLink className="text-dark nav-column" to="/login">
							<div><i className="fas fa-sign-in-alt"></i></div>Login
							</RouteLink>
						</NavItem>
						<NavItem>
							<RouteLink className="text-dark nav-column" to="/signup">
							<div><i className="fas fa-sign"></i><i class="fas fa-arrow-up"></i></div>Sign up
							</RouteLink>
						</NavItem>
						<NavItem>
							<RouteLink className="text-dark nav-column" to="/logout">
							<div><i className="fas fa-sign-out-alt"></i></div>Sign out
							</RouteLink>
						</NavItem>
					</Nav>
				</Collapse>
				</Container>
			</Navbar>
				<Route exact path="/" />
				<Route path="/profile" component={Profile} />
				<Route path="/add-restaurant" component={AddRestaurant} />
				<Route path="/add-review" component={AddReview} />
				<Route path="/edit-restaurant" render={props => {return <EditRestaurant {...props} />}}/>
				<Route path="/edit-review" render={props => {return <EditReview {...props} />}}/>
				<Route exact path="/explore" render={props => {return <Restaurants {...props} />}}/>
				<Route path="/explore/1" render={props => { return <Restaurant {...props} /> }} />
				<Route path="/login" render={props => {return <Login {...props} />}}/>
				<Route path="/signup" render={props => {return <Signup {...props} />}}/>
				<PrivateRoute path="/logout" />
		</div>

	)
}