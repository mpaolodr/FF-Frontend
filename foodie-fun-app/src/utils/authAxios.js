import axios from "axios";
import React, { useState } from "react";

// MARK: - Axios using authentication for authenticated users
export const authAxios = () => {
	const token = window.localStorage.getItem("foodieToken");
	return axios.create({
		baseURL: 'https://cors-anywhere.herokuapp.com/https://rayfoodiefun.herokuapp.com/api',
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	});
};