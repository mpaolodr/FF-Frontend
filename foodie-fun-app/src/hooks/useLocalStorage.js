import { useState } from "react";
// MARK: - grab and set token in local storage
export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});
	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
};