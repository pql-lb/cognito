import React from "react";
import { Link } from "react-router-dom";

export const HeaderList = React.memo(({ items }) => {
    return (
        <>
            {items.length &&
                items.map((item) => {
                    return (
                        <li key={item.string} className="header__item">
                            <Link to={item.link}>{item.string}</Link>
                        </li>
                    );
                })}
        </>
    );
});
