import React, { useContext, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const List = React.memo(({ products }) => {
    return (
        <div className="list">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
});
