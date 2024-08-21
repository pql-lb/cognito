import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import { ProductsProvider } from "./context/products";
import RoutesComponent from "./routes";
import { BasketProvider } from "./context/basket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProductsProvider>
            <BasketProvider>
                <RoutesComponent />
            </BasketProvider>
        </ProductsProvider>
    </React.StrictMode>
);
