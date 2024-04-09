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

	function createToast(message, variant) {
		const nextToastList = [
			...toastList,
			{
				id: crypto.randomUUID(),
				message,
				variant,
			},
		];

		setToastList(nextToastList);
	}

	function dismissToast(id) {
		const nextToastList = toastList.filter((toast) => {
			return toast.id !== id;
		});

		setToastList(nextToastList);
	}

	return (
		<ToastContext.Provider value={{ toastList, createToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
