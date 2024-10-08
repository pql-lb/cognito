import React, {
    useCallback,
    useState,
    useEffect,
    startTransition,
    lazy,
} from "react";
import { Loader } from "../molecules/Loader";
const List = lazy(() => import("../molecules/List"));

// Component simulates lazy loading and displaying a paginated list of products with infinite scrolling
const ProductList = React.memo(({ products }) => {
    const [productsState, setProductsState] = useState([]);
    const [cursor, setCursor] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const PAGE_SIZE = 24;

    const fetchPosts = useCallback(async () => {
        if (!hasMore || isLoading) return;
        setIsLoading(true);
        startTransition(() => {
            const nextCursor = cursor + PAGE_SIZE;
            const splitArr = products.slice(cursor, nextCursor);

            setProductsState((prevPosts) => [...prevPosts, ...splitArr]);
            setCursor(nextCursor);
            if (nextCursor >= products.length) {
                setHasMore(false);
            }

            setIsLoading(false);
        });
    }, [cursor, products, productsState, hasMore]);

    const handleScroll = () => {
        const scrollThreshold = 5;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        const isAtBottom =
            scrollHeight - scrollTop <= clientHeight + scrollThreshold;

        const isNotScrollable = scrollHeight <= clientHeight;

        if (isNotScrollable || isAtBottom) {
            if (!isLoading && hasMore) {
                fetchPosts();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (!isLoading && hasMore && products.length) {
            handleScroll();
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll, products]);

    return (
        <>
            <List products={productsState} />
            {isLoading && <Loader bg={false} />}
            {!hasMore && <></>}
        </>
    );
});

export default ProductList;
