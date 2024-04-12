import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
    main: "mediumseagreen",
};
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>
);
