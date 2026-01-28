import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setBusy(true);
        setError("");

        try {
            const res = await login({ username, password });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();

            localStorage.setItem("token", data.token);
            navigate("/cards/new");
        } catch (e2) {
            console.error(e2);
            setError("Login failed");
        } finally {
            setBusy(false);
        }
    }

    return (
        <main className="form-page container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="card-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={busy}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={busy}
                        required
                    />
                </div>
                {error ? <p className="error">{error}</p> : null}
                <button disabled={busy} type="submit" className="form-submit">
                    {busy ? "Logging in..." : "Login"}
                </button>
            </form>
        </main>
    );
}
