import ReactDOM from "react-dom";
import App from "./App";
import { CorreiosProvider } from "./hooks/useEvents";

ReactDOM.render(
  <CorreiosProvider>
    <App />
  </CorreiosProvider>,
  document.getElementById("root")
);
