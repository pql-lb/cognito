import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { NotFound } from "./components/pages/NotFound";
import { Loader } from "./components/molecules/Loader";
import ErrorBoundary from "./components/molecules/Error";

const Products = lazy(() => import("./components/pages/Products"));
const Product = lazy(() => import("./components/pages/Product"));

function RoutesComponent() {
    return (
        <Router>
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </Router>
    );
}

export default RoutesComponent;
