import React, { useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastList, setToastList] = useState([]);

	return <ToastContext.Provider value={{ toastList, setToastList }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
