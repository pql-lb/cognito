import "@testing-library/jest-dom";
import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import {
    MockBasketProvider,
    mockDispatch,
    state,
    stateOpen,
} from "./setupTests";
import { Basket } from "../components/organisms/Basket";
import { Aside } from "../components/organisms/Aside";
import { actionTypes } from "../context/basket";

describe("Cart Item Quantity", () => {
    test("test quantity is accurate when input is changed", async () => {
        const { rerender } = render(
            <MockBasketProvider state={state}>
                <Basket />
            </MockBasketProvider>
        );

        const button = screen.getByTestId("cart");
        fireEvent.click(button);
        const updatedState = {
            ...state,
            open: true,
        };
        rerender(
            <MockBasketProvider state={updatedState}>
                <Basket />
                <Aside />
            </MockBasketProvider>
        );

        await waitFor(() => {
            const prod1 = screen.getByText("Product 1");
            const prod1Input = prod1.closest("div").querySelector("input");
            fireEvent.change(prod1Input, { target: { value: "5" } });
            const btn = screen.getByTestId("change1");
            fireEvent.click(btn);
            expect(prod1Input.value).toBe("5");

            expect(mockDispatch).toHaveBeenCalledWith({
                type: actionTypes.EDIT_ITEM,
                payload: { id: 1, count: 5 },
            });
        });
    });
});
