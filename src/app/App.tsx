import { TaskPage } from "@pages/TaskPage";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <TaskPage />
    </Provider>
  );
}

export default App;
