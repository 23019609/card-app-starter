import { Link } from "react-router-dom";

export default function Home({ title }) {
    /* TODO: Design and complete the Home page
    - display instructions
    - link to Cards page
    - style as a landing page */
    return (
        <main className="container">
            <img
                className="img-banner"
                src="https://www.nag.co.za/wp-content/uploads/2019/06/Magic-The-Gathering.jpg"
                alt="magic the gathering banner"
            />

            <h1>Card Management App</h1>
            <p>
                Welcome to your Magic: The Gathering card management app. Use
                this app to browse and manage your card collection. Click
                CardList to view all available cards.
            </p>
        </main>
    );
}
