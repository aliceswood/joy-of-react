import React, { useState, useCallback } from "react";
import useKeydown from "../../hooks/usekeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastList, setToastList] = useState([]);

	const handleEscape =
		useCallback(() => {
			setToastList([]);
		}, []);
	

	useKeydown("Escape", handleEscape);

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
