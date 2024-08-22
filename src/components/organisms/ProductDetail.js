import React from "react";
import { formatPrice } from "../../utils/format";
import ProductCard from "../molecules/ProductCard";

const ProductDetail = React.memo(({ product }) => {
    return (
        <div className="productDetail">
            <ProductCard className={"productDetail__inner"} product={product} />
        </div>
    );
});

export default ProductDetail;
