import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/createContext";
import AuthContextProvider from "./context/auth/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ContextProvider>
				<App />
			</ContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
