import React from "react";

export const Button = React.memo(
    ({ dataTestid, className, handleClick, string, value }) => {
        return (
            <button
                data-testid={dataTestid}
                className={`button ${className ? className : ""}`}
                data-value={value ? value : null}
                onClick={handleClick}
            >
                {string}
            </button>
        );
    }
);
