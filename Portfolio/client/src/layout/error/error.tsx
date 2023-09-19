import "./error.scss";

export const Error = ({ error }: { error: string }) => {
	return (
		<div className="error-section">
			<h1>Error.....</h1>
			<h3>{error}</h3>
		</div>
	);
};
