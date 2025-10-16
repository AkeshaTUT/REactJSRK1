import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/Add-Book";

export default function App() {
    return (
        <div>
            <header style={{ padding: 16, borderBottom: "1px solid #ccc" }}>
                <nav style={{ display: "flex", gap: 12 }}>
                    <NavLink to="/books">Books</NavLink>
                    <NavLink to="/add-book">Add Book</NavLink>
                </nav>
            </header>

            <main style={{ padding: 16 }}>
                <Routes>
                    <Route path="/books" element={<Books />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="*" element={<div>404 — Not Found</div>} />
                </Routes>
            </main>
        </div>
    );
}