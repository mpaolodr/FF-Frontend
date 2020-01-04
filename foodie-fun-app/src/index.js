import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// MARK: -- Third party libraries
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoidGNsb2htIiwiYSI6ImNqMDMwM3N3azA4N2cycWxzOXRxc2ExenQifQ.LNWEYTdZW2YaurDIgqXJtg';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
