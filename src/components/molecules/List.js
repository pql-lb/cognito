import { formatPrice } from "../../utils/format";
import { ProductCard } from "./ProductCard";
export const List = ({ products }) => {
    return (
        <div className="list">
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};
