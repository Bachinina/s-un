import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/router";
import { AuthContextProvider } from "@shared/context/auth";
import { ThemeContextProvider } from "@shared/context/theme";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContextProvider>
          <AuthContextProvider>
            <AppRouter />
          </AuthContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </Provider>
  );
};
