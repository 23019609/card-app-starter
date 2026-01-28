import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
    const navigate = useNavigate();
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (card) => {
        try {
            setBusy(true);
            setError(null);
            await addCard(card);
            navigate("/cards");
        } catch (err) {
            setError("Failed to add card" + card.card_name);
        } finally {
            setBusy(false);
        }
    };

    return (
        <main className="form-page container">
            <h1>Add Card</h1>

            {error && <p className="error">{error}</p>}

            <CardForm onSubmit={handleSubmit} disabled={busy} />
        </main>
    );
}
