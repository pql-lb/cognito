import React from "react";
import { Link } from "react-router-dom";
import { Basket } from "./Basket";

export const Header = React.memo(() => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <Basket />
                </ul>
            </nav>
        </header>
    );
});
