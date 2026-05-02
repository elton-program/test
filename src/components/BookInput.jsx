import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../redux/store/actionTypes";
import "../App.css";

const BookInput = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !author) return;

    dispatch({
      type: ADD_BOOK,
      payload: { title, author }
    });

    setTitle("");
    setAuthor("");
    setOpen(false);
  };

  return (
    <div>
      <button className="knopka" onClick={() => setOpen(true)}> Add Book</button>

      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="nom">New</h3>

            <input
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookInput;