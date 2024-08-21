"use client";
import React, {
    createContext,
    useReducer,
    useEffect,
    useCallback,
} from "react";

const initialState = {
    open: false,
    cart: [],
};
export const actionTypes = {
    OPEN: "OPEN",
    ADD_TO_CART: "ADD_TO_CART",
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.OPEN:
            console.log("open");
            return { ...state, open: action.payload };
        case actionTypes.ADD_TO_CART:
            console.log("reducer");
            const newCart = [...state.cart, action.payload];

            localStorage.setItem("cart", JSON.stringify(newCart));
            return { ...state, cart: newCart };

        default: {
            return state;
        }
    }
};

export const BasketContext = createContext({ state: { ...initialState } });
export const BasketDispatchContext = createContext(null);

export const BasketProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BasketContext.Provider value={state}>
            <BasketDispatchContext.Provider value={dispatch}>
                <div>{children}</div>
            </BasketDispatchContext.Provider>
        </BasketContext.Provider>
    );
};
