import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import "./App.css";
import Login from "./pages/Login";

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cards" element={<CardList />} />
                    {/* TODO: Complete the routes */}
                    <Route path="cards/new" element={<AddCard />} />
                    <Route path="cards/:id/edit" element={<EditCard />} />
                    <Route
                        path="*"
                        element={<h1 className="not-found">Page Not Found</h1>}
                    />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
