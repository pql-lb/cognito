"use client";
import React, {
    createContext,
    useReducer,
    useEffect,
    useCallback,
} from "react";

const initialState = {
    products: [],
    loading: true,
    error: null,
};
export const actionTypes = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload, loading: false };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.payload, loading: false };
        default: {
            return state;
        }
    }
};

export const ProductsContext = createContext({ state: { ...initialState } });
export const ProductsDispatchContext = createContext(null);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ProductsContext.Provider value={state}>
            <ProductsDispatchContext.Provider value={dispatch}>
                <div>{children}</div>
            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    );
};
