import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ContextProvider } from "@/context";
import "@/assets/css/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
      <ThemeProvider>
         <ContextProvider>
            <App />
         </ContextProvider>
      </ThemeProvider>
   </BrowserRouter>
);
