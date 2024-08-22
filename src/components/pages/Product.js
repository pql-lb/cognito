import { lazy, useContext, useEffect, useState } from "react";
import { MainTemplate } from "../templates/MainTemplate";
import { useParams } from "react-router-dom";
import UseProducts from "../../hooks/useProducts";
const ProductDetail = lazy(() => import("../organisms/ProductDetail"));

const Product = () => {
    const { id } = useParams();
    const { products, loading, error } = UseProducts();
    const [relevantProduct, setProduct] = useState(null);
    useEffect(() => {
        if (products && !loading && !error) {
            const prod = products.filter(
                (product) => Number(product.id) === Number(id)
            );

            setProduct(prod[0]);
        }
    }, [products, loading, error]);

    return (
        <MainTemplate>
            {relevantProduct && <ProductDetail product={relevantProduct} />}
        </MainTemplate>
    );
};

export default Product;
