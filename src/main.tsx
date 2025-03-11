import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={5500}
      hideProgressBar
      newestOnTop
      closeOnClick
      draggable={false}
      theme="light"
    />
  </>
);
