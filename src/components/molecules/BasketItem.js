import React from "react";
import { formatPrice } from "../../utils/format";

export const BasketItem = React.memo(({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{formatPrice(product.price)}</p>
        </div>
    );
});
