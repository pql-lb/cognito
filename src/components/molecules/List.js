import React, { lazy, useContext, useEffect, useState } from "react";
const ProductCard = lazy(() => import("./ProductCard"));

const List = React.memo(({ products }) => {
    return (
        <div className="list">
            {products.map((product) => {
                return (
                    <ProductCard
                        truncuate={true}
                        key={product.id}
                        product={product}
                    />
                );
            })}
        </div>
    );
});
export default List;
