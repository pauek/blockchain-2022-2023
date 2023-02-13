import ReactDOM from "react-dom/client";
import { generatePage } from "./gen-page";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  generatePage()
);
