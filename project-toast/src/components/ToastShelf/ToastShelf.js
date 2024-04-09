import React, { useContext } from "react";

import { ToastContext } from "../ToastProvider/ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleDismiss }) {
	const {toastList} = useContext(ToastContext);

	return (
		<ol className={styles.wrapper}
		role="region"
		aria-live="polite"
		aria-label="Notification"
		>
			{toastList.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id}>
					<Toast 
						id={toast.id} 
						variant={toast.variant} 
						handleDismiss={handleDismiss}
					>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
