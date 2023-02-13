import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

const datos = [
  {
    nombre: "Fulanito",
    apellido: "García",
    email: "fulanito.garcia@gmail.com",
  },
  {
    nombre: "Menganito",
    apellido: "Fernández",
    email: "mf@hotmail.com",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App datos={datos} />
);
