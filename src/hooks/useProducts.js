import { startTransition, useCallback, useContext, useEffect } from "react";
import {
    ProductsContext,
    ProductsDispatchContext,
    actionTypes,
} from "../context/products";

//Fetches the products to display on the products page
const UseProducts = () => {
    const ctx = useContext(ProductsContext);
    const { products, loading, error } = ctx;
    const dispatch = useContext(ProductsDispatchContext);

    const fetchProducts = useCallback(() => {
        dispatch({ type: actionTypes.SET_LOADING, payload: true });
        try {
            startTransition(() => {
                fetch(
                    "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json"
                )
                    .then((response) => response.json())
                    .then((data) => {
                        dispatch({
                            type: actionTypes.SET_PRODUCTS,
                            payload: data,
                        });
                    })
                    .catch((error) =>
                        dispatch({
                            type: actionTypes.SET_ERROR,
                            payload: error.message,
                        })
                    );
            });
        } catch (err) {
            dispatch({
                type: actionTypes.SET_ERROR,
                payload: err.message,
            });
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return { products, error, loading };
};

export default UseProducts;
