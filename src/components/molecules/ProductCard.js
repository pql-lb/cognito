import React, { useCallback, useContext, useEffect } from "react";
import { formatPrice } from "../../utils/format";
import { BasketDispatchContext, actionTypes } from "../../context/basket";

export const ProductCard = ({ product }) => {
    const { id, name, description, price } = product;
    const dispatch = useContext(BasketDispatchContext);

    const handleClick = useCallback(() => {
        if (dispatch) {
            dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
        }
    }, [dispatch, product]);

    return (
        <div className="list__item">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{formatPrice(price)}</p>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    );
};
