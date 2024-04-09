import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList }) {
	return (
		<ol className={styles.wrapper}>
			{toastList.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id}>
					<Toast variant={toast.variant}>{toast.message}</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
