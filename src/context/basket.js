"use client";
import React, {
    createContext,
    useReducer,
    useEffect,
    useCallback,
    startTransition,
} from "react";

const initialState = {
    open: false,
    cart: [],
};
export const actionTypes = {
    OPEN: "OPEN",
    ADD_TO_CART: "ADD_TO_CART",
    RELOAD_CART: "RELOAD_CART",
    REMOVE_ITEM: "REMOVE_ITEM",
    EDIT_ITEM: "EDIT_ITEM",
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.OPEN:
            return { ...state, open: action.payload };
        case actionTypes.RELOAD_CART:
            const json = action.payload;
            return {
                ...state,
                cart: json ? JSON.parse(json) : [],
            };
        case actionTypes.ADD_TO_CART:
            const newItem = action.payload;
            const itemExists = state.cart.find(
                (item) => item.id === newItem.id
            );
            if (itemExists) {
                const updatedCart = state.cart.map((item) =>
                    item.id === newItem.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return { ...state, cart: updatedCart };
            } else {
                const updatedCart = [...state.cart, { ...newItem, count: 1 }];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return { ...state, cart: updatedCart };
            }
        case actionTypes.REMOVE_ITEM:
            const updatedCart = state.cart.filter(
                (item) => String(item.id) !== action.payload
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { ...state, cart: updatedCart };
        case actionTypes.EDIT_ITEM:
            const cartEdited = state.cart.map((item, i) => {
                if (item.id === action.payload.id) {
                    item.count = action.payload.count;
                    return item;
                } else {
                    return item;
                }
            });

            localStorage.setItem("cart", JSON.stringify(cartEdited));
            return { ...state, cart: cartEdited };
        default: {
            return state;
        }
    }
};

export const BasketContext = createContext({ state: { ...initialState } });
export const BasketDispatchContext = createContext(null);

export const BasketProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const cartStorage = localStorage.getItem("cart");
        dispatch({ payload: cartStorage, type: actionTypes.RELOAD_CART });
    }, [dispatch]);

    return (
        <BasketContext.Provider value={state}>
            <BasketDispatchContext.Provider value={dispatch}>
                <div>{children}</div>
            </BasketDispatchContext.Provider>
        </BasketContext.Provider>
    );
};
