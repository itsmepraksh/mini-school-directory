import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Wrapper from "./Wrapper.jsx";
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Wrapper>
      <App />
      <ToastContainer/>
    </Wrapper> 
  </BrowserRouter>
);
