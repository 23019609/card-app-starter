import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
    /* TODO: Complete the CardList page
    - display a list of cards (use the Card component to display each card)
    - delete button calling handleDelete with the card object
    - handle loading, busy, and error states
    - style as a grid UI */

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchCards() {
            try {
                setLoading(true);
                const data = await getCards();
                setCards(data);
            } catch {
                setError("Failed to load cards");
            } finally {
                setLoading(false);
            }
        }

        fetchCards();
    }, []);

    async function handleDelete(card) {
        try {
            setBusy(true);
            await deleteCard(card.id);
            setCards((prev) => prev.filter((c) => c.id !== card.id));
        } catch {
            setError("Failed to delete card");
        } finally {
            setBusy(false);
        }
    }

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    if (error) {
        return <p className="error">Error: {error}</p>;
    }

    return (
        <div className="cardlist container">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    onDelete={() => handleDelete(card)}
                    disabled={busy === true}
                />
            ))}
        </div>
    );
}
