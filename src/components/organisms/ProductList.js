import React, { useCallback, useState, useEffect } from "react";
import { List } from "../molecules/List";
// const [postsBackup, setBackupPosts] = useState([]);
// const [hide, setHide] = useState(false);
// const { filter } = useContext(Context);
// useEffect(() => {
//     setPosts(postsBackup);
//     setHide(false);
//     if (filter.length) {
//         setHide(true);
//         const newPosts = postsBackup.filter((post) => {
//             const tags = post.metadata.tags || [];
//             return tags.some((tag) => tag.sys.id === filter);
//         });
//         setPosts(newPosts);
//     }
// }, [filter]);
export const ProductList = React.memo(({ products }) => {
    const [productsState, setProductsState] = useState([]);
    const [cursor, setCursor] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const PAGE_SIZE = 24;

    const fetchPosts = useCallback(async () => {
        if (!hasMore) return;
        setIsLoading(true);
        const nextCursor = cursor + PAGE_SIZE;
        const splitArr = products.slice(cursor, nextCursor);

        setProductsState((prevPosts) => [...prevPosts, ...splitArr]);
        setCursor(nextCursor);
        if (nextCursor >= products.length) {
            setHasMore(false);
        }

        setIsLoading(false);
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
            {isLoading && <div>Loading...</div>}
            {!hasMore && (
                <p className="text-text opacity-50 text-center text-sm">
                    End of products.
                </p>
            )}
        </>
    );
});
