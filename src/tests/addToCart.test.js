import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { actionTypes } from "../../src/context/basket";
import ProductCard from "../components/molecules/ProductCard";
import { MockBasketProvider, mockDispatch, state } from "./setupTests";
import { MemoryRouter } from "react-router-dom";

describe("ProductCard Component", () => {
    const product = {
        id: 1,
        name: "Test Product",
        description: "This is a test product",
        price: 9.99,
        count: 1,
    };
    test("dispatches ADD_TO_CART action with product details when Add to cart is clicked", () => {
        render(
            <MemoryRouter>
                <MockBasketProvider state={state}>
                    <ProductCard product={product} />
                </MockBasketProvider>
            </MemoryRouter>
        );
        const button = screen.getByText("Add to cart");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: actionTypes.ADD_TO_CART,
            payload: product,
        });
    });
});
