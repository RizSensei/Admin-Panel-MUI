import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./theme/theme.jsx";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";
import DarkModeProvider from "./context/DarkModeProvider.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
// import { PageTitleProvider } from "./context/PageTitleContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        {/* <PageTitleProvider> */}
          <DarkModeProvider>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </ThemeProvider>
          </DarkModeProvider>
        {/* </PageTitleProvider> */}
      </SidebarProvider>
    </Provider>
  </React.StrictMode>
);
