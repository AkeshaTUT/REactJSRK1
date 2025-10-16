import React, { useState, useEffect, useCallback, useMemo } from "react";
import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");


  useEffect(() => {
    const saved = localStorage.getItem("books");
    if (saved) {
      setBooks(JSON.parse(saved));
    } else {

      const defaultBooks = [
        { id: 1, title: "The Pragmatic Programmer", genre: "tech" },
        { id: 2, title: "1984", genre: "fiction" },
        { id: 3, title: "Sapiens", genre: "nonfiction" },
      ];
      setBooks(defaultBooks);
      localStorage.setItem("books", JSON.stringify(defaultBooks));
    }
  }, []);

  const handleDelete = useCallback((id) => {
    const updated = books.filter((book) => book.id !== id);
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
  }, [books]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = genre === "all" || book.genre === genre;
      return matchesSearch && matchesGenre;
    });
  }, [books, search, genre]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Books Page</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">Все</option>
        <option value="fiction">История</option>
        <option value="nonfiction">Манга</option>
        <option value="tech">Технологии</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        {filteredBooks.length > 0 ? (
          <div className="book-list" style={{ display: "grid", gap: "15px" }}>
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
}
