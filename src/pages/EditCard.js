import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCard = async () => {
            try {
                setError(null);
                const cards = await getCards();
                const found = cards.find((c) => c.id.toString() === id);
                setCard(found);
            } catch (err) {
                setError("Failed to load card");
            } finally {
                setLoading(false);
            }
        };

        loadCard();
    }, [id]);

    const handleSubmit = async (updatedCard) => {
        try {
            setBusy(true);
            setError(null);
            await updateCard(id, updatedCard);
            navigate("/cards");
        } catch (err) {
            setError("Failed to update card");
        } finally {
            setBusy(false);
        }
    };

    if (loading) {
        return (
            <main className="form-page container">
                <p>Loading...</p>
            </main>
        );
    }

    if (!card) {
        return (
            <main className="form-page container">
                <p>Card not found</p>
            </main>
        );
    }

    return (
        <main className="form-page container">
            <h1>Edit Card</h1>

            {error && <p className="error">{error}</p>}

            <CardForm
                initialData={card}
                onSubmit={handleSubmit}
                disabled={busy}
            />
        </main>
    );
}
