import UseProducts from "../../hooks/useProducts";
import { ProductList } from "../organisms/ProductList";
import { MainTemplate } from "../templates/MainTemplate";

const Products = () => {
    const { products, loading, error } = UseProducts();

    return (
        <MainTemplate>
            {products && <ProductList products={products} />}
        </MainTemplate>
    );
};

export default Products;
