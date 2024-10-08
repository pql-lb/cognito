import React, { useCallback, useContext, useEffect, useState } from "react";
import { formatPrice } from "../../utils/format";
import { Button } from "../atoms/Button";
import { BasketDispatchContext, actionTypes } from "../../context/basket";

const BasketItem = React.memo(({ product, index }) => {
    const dispatch = useContext(BasketDispatchContext);
    const [input, setInput] = useState(Number(product.count));
    const handleClick = useCallback(
        (e) => {
            const id = e.target.dataset.value;
            dispatch({ type: actionTypes.REMOVE_ITEM, payload: id });
        },
        [dispatch]
    );

    useEffect(() => {
        setInput(product.count);
    }, [product.count]);

    const handleChange = useCallback(() => {
        dispatch({
            payload: { id: product.id, count: Number(input) },
            type: actionTypes.EDIT_ITEM,
        });
    }, [input]);
    return (
        <div className="aside__item" id={product.id}>
            <Button
                className={"aside__delete"}
                value={product.id}
                handleClick={handleClick}
                string="X"
            />
            <h2 className="aside__title">{product.name}</h2>
            <p className="aside__price">{formatPrice(product.price)}</p>
            <div className="aside__quantity">
                <div>
                    <label htmlFor="quantity"> Quantity:</label>
                    <input
                        id="quantity"
                        className="aside__input"
                        type="number"
                        value={input}
                        onChange={(e) => setInput(Number(e.target.value))}
                    />
                </div>
                <Button
                    dataTestid={"change" + product.id}
                    handleClick={handleChange}
                    string="Update"
                    className={"aside__change"}
                />
            </div>
        </div>
    );
});
export default BasketItem;
