import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
    container.classList.add("mx-auto");
    console.log(container);

})

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)