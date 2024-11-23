import "./App.css";
import AppRoutes from "@routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
