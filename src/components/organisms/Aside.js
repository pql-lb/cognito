import React, { useContext } from "react";
import { BasketContext, BasketDispatchContext } from "../../context/basket";
import { BasketItem } from "../molecules/BasketItem";

export const Aside = React.memo(() => {
    const { open, cart } = useContext(BasketContext);
    return (
        <aside className={`aside ${open ? "aside--active" : ""}`} role="aside">
            <div className="aside__inner">
                {cart.length &&
                    cart.map((item, index) => {
                        return (
                            <BasketItem
                                className="aside__delete"
                                key={"cart" + item.id + index}
                                product={item}
                                index={index}
                            />
                        );
                    })}
            </div>
        </aside>
    );
});
