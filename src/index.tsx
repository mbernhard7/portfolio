import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>
);
