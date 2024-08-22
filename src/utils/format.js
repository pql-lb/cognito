export const formatPrice = (amount, locale = "en-UK", currency = "GBP") => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(amount);
};
