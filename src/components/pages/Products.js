import { lazy, useContext } from "react";
import UseProducts from "../../hooks/useProducts";
import { MainTemplate } from "../templates/MainTemplate";
const ProductList = lazy(() => import("../organisms/ProductList"));

const Products = () => {
    const { products, isLoading, error } = UseProducts();
    // if (true) {
    //     throw new Error("Test Error");
    // }
    return (
        <MainTemplate>
            {products && <ProductList products={products} />}
        </MainTemplate>
    );
};

export default Products;
