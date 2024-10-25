import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TemeProvider from "./contexts/temeContext.jsx";
import CurrTaskProvider from "./contexts/CurrTask.jsx";
import AllTasksProvider from "./contexts/AllTasksContext.jsx";
import AllTasProvider from "./contexts/AllTas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemeProvider>
      <CurrTaskProvider>
        <AllTasProvider>
          <AllTasksProvider>
            <App />
          </AllTasksProvider>
        </AllTasProvider>
      </CurrTaskProvider>
    </TemeProvider>
  </StrictMode>
);
