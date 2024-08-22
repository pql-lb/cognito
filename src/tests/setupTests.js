import React from "react";
import {
    BasketProvider,
    BasketContext,
    BasketDispatchContext,
} from "../../src/context/basket";

export const mockDispatch = jest.fn((action) => {});

export const state = {
    open: false,
    cart: [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 9.99,
            count: 1,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: 19.99,
            count: 1,
        },
    ],
};
export const stateOpen = {
    open: true,
    cart: [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 9.99,
            count: 10,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: 19.99,
            count: 5,
        },
    ],
};

export const MockBasketProvider = ({ children, state }) => {
    return (
        <BasketContext.Provider value={state}>
            <BasketDispatchContext.Provider value={mockDispatch}>
                {children}
            </BasketDispatchContext.Provider>
        </BasketContext.Provider>
    );
};

afterEach(() => {
    jest.clearAllMocks();
});
