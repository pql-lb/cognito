import React from "react";
import {
    BasketProvider,
    BasketContext,
    BasketDispatchContext,
} from "../../src/context/basket";

export const mockDispatch = jest.fn();

export const state = {
    open: false,
    cart: [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 9.99,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: 19.99,
        },
    ],
};

export const MockBasketProvider = ({ children, state }) => {
    return (
        <BasketProvider>
            <BasketContext.Provider value={state}>
                <BasketDispatchContext.Provider value={mockDispatch}>
                    {children}
                </BasketDispatchContext.Provider>
            </BasketContext.Provider>
        </BasketProvider>
    );
};

afterEach(() => {
    jest.clearAllMocks();
});
