import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_READ, DELETE_BOOK } from "../redux/store/actionTypes";
import "../App.css";

const BookList = () => {
  const { books, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filteredBooks = books.filter(book => {
    if (filter === "READ") return book.isRead;
    if (filter === "UNREAD") return !book.isRead;
    return true;
  });

  return (
    <div className="mega">
      {filteredBooks.map(book => (
        <div className="book-item" key={book.id}>
          <span className={`book-title ${book.isRead ? "read" : ""}`}>
            {book.title} - {book.author}
          </span>

          <div className="actions">
            <button onClick={() => dispatch({ type: TOGGLE_READ, payload: book.id })}>
              Done
            </button>
            <button onClick={() => dispatch({ type: DELETE_BOOK, payload: book.id })}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;