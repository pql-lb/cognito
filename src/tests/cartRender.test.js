import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { actionTypes } from "../../src/context/basket";
import { Basket } from "../components/organisms/Basket";
import { MockBasketProvider, mockDispatch, state } from "./setupTests";

describe("Basket Open Button", () => {
    test("cart open state correctly executed", async () => {
        render(
            <MockBasketProvider state={state}>
                <Basket />
            </MockBasketProvider>
        );

        const button = screen.getByTestId("cart");

        fireEvent.click(button);

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: actionTypes.OPEN,
                payload: true,
            });
        });
    });
});

describe("Basket Item Component", () => {
    test("all cart items being displayed", async () => {
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
            </MockBasketProvider>
        );

        await waitFor(() => {
            expect(screen.getByRole("aside")).toBeInTheDocument();
            expect(screen.getByText("Product 1")).toBeInTheDocument();
            expect(screen.getByText("Product 2")).toBeInTheDocument();
        });
    });
});
