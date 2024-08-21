import React, { useCallback, useContext, useEffect } from "react";
import { formatPrice } from "../../utils/format";
import { BasketDispatchContext, actionTypes } from "../../context/basket";
import { Button } from "../atoms/Button";

export const ProductCard = ({ product }) => {
    const { id, name, description, price } = product;
    const dispatch = useContext(BasketDispatchContext);

    const handleClick = useCallback(() => {
        if (dispatch) {
            dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
        }
    }, [dispatch, product]);

    return (
        <div data-testid={id} className="list__item">
            <h2 className="list__title">{name}</h2>
            <p className="list__description">{description}</p>
            <p className="list__price">{formatPrice(price)}</p>
            <Button
                className={"list__cart"}
                handleClick={handleClick}
                string="Add to cart"
            />
        </div>
    );
};
