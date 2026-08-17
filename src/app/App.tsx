import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/router";
import { AuthContextProvider } from "@shared/context/auth";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  );
};
