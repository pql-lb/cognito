import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { actionTypes } from "../../src/context/basket";
import { ProductCard } from "../components/molecules/ProductCard";
import {
    MockBasketProvider,
    mockDispatch,
    state,
    stateOpen,
} from "./setupTests";
import { Basket } from "../components/organisms/Basket";
import { Aside } from "../components/organisms/Aside";

describe("Cart Item Quantity", () => {
    beforeEach(() => {
        localStorage.clear();
        const stateOpen2 = stateOpen.cart;
        localStorage.setItem("cart", JSON.stringify({ cart: stateOpen2 }));
    });

    test("test quantity is accurate when input is changed", async () => {
        render(
            <MockBasketProvider state={stateOpen}>
                <Basket />
                <Aside />
            </MockBasketProvider>
        );

        const prod1 = screen.getByText("Product 1");
        const prod1Input = prod1.closest("div").querySelector("input");
        fireEvent.change(prod1Input, { target: { value: "5" } });
        const btn = screen.getByTestId("change1");
        fireEvent.click(btn);

        await waitFor(() => {
            expect(prod1Input.value).toBe("5");

            expect(mockDispatch).toHaveBeenCalledWith({
                type: actionTypes.EDIT_ITEM,
                payload: { id: 1, count: 5 },
            });
        });
    });
});
