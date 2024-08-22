import React from "react";

export const Loader = React.memo(({ bg }) => {
    return (
        <div
            className="loader"
            style={!bg ? { background: "transparent" } : {}}
        >
            <span className="loader__inner"></span>
        </div>
    );
});
