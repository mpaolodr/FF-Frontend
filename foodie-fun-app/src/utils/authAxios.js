import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage.js";

// MARK: - Axios using authentication for authenticated users
export const authAxios = () => {
	const token = useLocalStorage("foodieToken", "");
	return axios.create({
		baseURL: 'https://rayfoodiefun.herokuapp.com/api',
		headers: {
			Authorization: token
		}
	});
};