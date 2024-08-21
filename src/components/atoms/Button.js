export const Button = ({
    dataTestid,
    className,
    handleClick,
    string,
    value,
}) => {
    return (
        <button
            data-testid={dataTestid}
            className={className}
            data-value={value ? value : null}
            onClick={handleClick}
        >
            {string}
        </button>
    );
};
