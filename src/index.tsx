import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { darkTheme } from "./theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
