import React, { useState } from "react";
import { NavLink as RouteLink } from "react-router-dom";

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

export const Navigation = (props) => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const loggedIn = () => { return localStorage.getItem("foodieToken") }

	const logout = () => { return localStorage.removeItem("foodieToken") && localStorage.removeItem("foodie_id") }
 
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
						{loggedIn && <NavItem>
							<RouteLink className="text-dark nav-column" to="/profile">
							<div><i className="far fa-user-circle"></i></div>Profile
							</RouteLink>
						</NavItem>}
						{loggedIn && <NavItem>
							<RouteLink className="text-dark nav-column" to="/explore">
							<div><i className="fas fa-compass"></i></div>Explore
							</RouteLink>
						</NavItem>}
						{loggedIn && <NavItem>
							<RouteLink className="text-dark nav-column" to="/login">
							<div><i className="fas fa-sign-in-alt"></i></div>Login
							</RouteLink>
						</NavItem>}
						{loggedIn && <NavItem>
							<RouteLink className="text-dark nav-column" to="/">
							<div><i className="fas fa-sign"></i><i class="fas fa-arrow-up"></i></div>Sign up
							</RouteLink>
						</NavItem>}
						{loggedIn && <NavItem>
							<RouteLink className="text-dark nav-column" to="/logout" onClick={logout}>
							<div><i className="fas fa-sign-out-alt"></i></div>Sign out
							</RouteLink>
						</NavItem>}
					</Nav>
				</Collapse>
				</Container>
			</Navbar>
		</div>
	)
}