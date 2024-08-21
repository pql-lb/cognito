import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { NotFound } from "./components/pages/NotFound";
const Products = lazy(() => import("./components/pages/Products"));
const Product = lazy(() => import("./components/pages/Product"));

function RoutesComponent() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
