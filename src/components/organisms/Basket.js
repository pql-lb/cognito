import React, { useCallback, useContext } from "react";
import { BasketContext, BasketDispatchContext } from "../../context/basket";
export const Basket = React.memo(() => {
    const dispatch = useContext(BasketDispatchContext);
    const { open } = useContext(BasketContext);
    const handleBasket = () => {
        dispatch({ type: "OPEN", payload: !open });
    };

    return (
        <>
            <div>
                <button onClick={handleBasket}>Basket</button>
            </div>
            {open && <aside>List of basket items</aside>}
        </>
    );
});
