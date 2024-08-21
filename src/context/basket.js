"use client";
import React, {
    createContext,
    useReducer,
    useEffect,
    useCallback,
} from "react";

const initialState = {
    open: false,
};
export const actionTypes = {
    OPEN: "OPEN",
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.OPEN:
            return { ...state, open: action.payload };

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
