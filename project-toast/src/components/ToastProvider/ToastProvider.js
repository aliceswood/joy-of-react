import React, { useState, useEffect } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastList, setToastList] = useState([]);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === "Escape") {
				setToastList([]);
			}
		}
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	
	return (
		<ToastContext.Provider value={{ toastList, setToastList }}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;
