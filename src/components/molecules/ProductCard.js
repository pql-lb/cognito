import React from "react";
import { formatPrice } from "../../utils/format";

export const ProductCard = React.memo(({ product }) => {
    const { id, name, description, price } = product;
    return (
        <div className="list__item">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{formatPrice(price)}</p>
        </div>
    );
});
