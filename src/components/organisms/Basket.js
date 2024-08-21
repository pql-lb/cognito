import React, { useCallback, useContext } from "react";
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
            {open && (
                <aside role="aside">
                    <div>
                        {cart.length &&
                            cart.map((item) => {
                                return (
                                    <BasketItem
                                        key={"cart" + item.id}
                                        product={item}
                                    />
                                );
                            })}
                    </div>
                </aside>
            )}
        </>
    );
});
