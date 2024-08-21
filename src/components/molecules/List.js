import { formatPrice } from "../../utils/format";
export const List = ({ posts }) => {
    return (
        <div className="list">
            {posts.map((post) => {
                const { id, name, description, price } = post;
                return (
                    <div key={id} className="list__item">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>{formatPrice(price)}</p>
                    </div>
                );
            })}
        </div>
    );
};
