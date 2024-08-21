import { useContext } from "react";
import UseProducts from "../../hooks/useProducts";
import { ProductList } from "../organisms/ProductList";
import { MainTemplate } from "../templates/MainTemplate";
import { ProductsContext } from "../../context/products";

const Products = () => {
    const { products, isLoading, error } = UseProducts();

    return (
        <MainTemplate>
            {products && <ProductList products={products} />}
        </MainTemplate>
    );
};

export default Products;
