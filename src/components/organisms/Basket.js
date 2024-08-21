import React, { useCallback, useContext, useEffect, useState } from "react";
import {
    BasketContext,
    BasketDispatchContext,
    actionTypes,
} from "../../context/basket";
import { BasketItem } from "../molecules/BasketItem";

export const Basket = React.memo(() => {
    const dispatch = useContext(BasketDispatchContext);
    const { open, cart } = useContext(BasketContext);
    const handleBasket = () => {
        dispatch({ type: actionTypes.OPEN, payload: !open });
    };

    return (
        <>
            <div>
                <button data-testid="cart" onClick={handleBasket}>
                    Basket
                </button>
            </div>
        </>
    );
});
