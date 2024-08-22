import React, { useCallback, useContext, useEffect, useState } from "react";
import {
    BasketContext,
    BasketDispatchContext,
    actionTypes,
} from "../../context/basket";
import { BasketItem } from "../molecules/BasketItem";
import { Button } from "../atoms/Button";

export const Basket = React.memo(() => {
    const dispatch = useContext(BasketDispatchContext);
    const { open, cart } = useContext(BasketContext);
    const handleBasket = () => {
        dispatch({ type: actionTypes.OPEN, payload: !open });
    };

    return (
        <>
            <div>
                <Button
                    string={!open ? "Basket" : "Close"}
                    handleClick={handleBasket}
                    dataTestid={"cart"}
                />
            </div>
        </>
    );
});
