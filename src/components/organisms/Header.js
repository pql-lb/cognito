import React from "react";
import { Link } from "react-router-dom";
import { Basket } from "./Basket";
import { Aside } from "./Aside";
import { Logo } from "../atoms/Logo";
import { HeaderList } from "../molecules/HeaderList";

export const Header = React.memo(() => {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <Logo />
                    <ul className="header__list">
                        <HeaderList
                            items={[{ string: "Products", link: "/" }]}
                        />

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
