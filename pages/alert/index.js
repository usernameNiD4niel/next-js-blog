import styles from "./alert.module.css";
import { clsx } from "clsx";

export default function Alert({ children, type }) {
	return (
		<div
			className={clsx({
				[styles.success]: type === "success",
				[styles.error]: type === "error",
			})}>
			{children}
		</div>
	);
}
// Blog Site - https://nextjs.org/learn/basics/dynamic-routes/render-markdown
// Documentation - https://nextjs.org/learn/foundations/from-react-to-nextjs/next-steps
