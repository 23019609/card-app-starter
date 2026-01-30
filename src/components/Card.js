import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
    /* TODO: Complete the Card component
    - display the card image and name
    - display the card ID
    - edit button linking to edit page
    - delete button calling onDelete with the card object
    - style as a card UI */

    const token = localStorage.getItem("token");

    return (
        <div className="card">
            <img
                src={card.card_pic}
                alt={card.card_name}
                className="card-image"
            />

            <div className="card-body">
                <h3>{card.card_name}</h3>
                <p className="card-id">ID: {card.id}</p>

                <div className="card-actions">
                    <Link to={`/cards/${card.id}/edit/`}>
                        <button disabled={busy} className="edit">
                            Edit
                        </button>
                    </Link>

                    {token && (
                        <button
                            onClick={() => onDelete(card)}
                            disabled={busy}
                            className="delete"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
