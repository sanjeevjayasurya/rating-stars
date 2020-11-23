import StarRating from './StarRating'
import { FaTrash } from "react-icons/fa";

export default function Color({ id, title, color, rating, onRemoveColor = f => f , onRate = f => f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemoveColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} onRate={rating => onRate(id,rating)} />
        </section>
    );
}