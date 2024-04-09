import React, { useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = useState("");
	const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
	// const [isVisible, setIsVisible] = useState(false);
	const [toastList, setToastList] = useState([
		{
			id: crypto.randomUUID(),
			message: "This is FYI",
			variant: "notice",
		},
		{
			id: crypto.randomUUID(),
			message: "Oh no!",
			variant: "error",
		},
	]);

	function handleDismiss() {
		// setIsVisible((current) => !current);
	}

	function handleCreateToast() {
		const nextToastList = [
			...toastList,
			{
				id: crypto.randomUUID(),
				message,
				variant,
			},
		];
		setToastList(nextToastList);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toastList={toastList} />

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => {
							const id = `variant-${option}`;
							return (
								<label key={id} htmlFor={id}>
									<input
										id={id}
										type="radio"
										name="variant"
										value={option}
										checked={variant === option}
										onChange={(event) => {
											setVariant(event.target.value);
										}}
									/>
									{option}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={handleCreateToast}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
