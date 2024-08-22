import React from "react";
import { Link } from "react-router-dom";
import { Basket } from "./Basket";
import { Aside } from "./Aside";

export const Header = React.memo(() => {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/">Products</Link>
                        </li>

                        <li className="header__item">
                            <Basket />
                        </li>
                    </ul>
                </nav>
            </header>
            <Aside />
        </>
    );
});
