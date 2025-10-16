import React from "react";

const BookCard = React.memo(({ book, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <h3>{book.title}</h3>
      <p>Genre: {book.genre}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
});

export default BookCard;
