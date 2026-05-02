import { ADD_BOOK, TOGGLE_READ, DELETE_BOOK, SET_FILTER } from "./actionTypes";

const initialState = {
  books: [
    { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy", isRead: false }
  ],
  filter: "ALL"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: Date.now(),
            title: action.payload.title,
            author: action.payload.author,
            isRead: false
          }
        ]
      };

    case TOGGLE_READ:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload
            ? { ...book, isRead: !book.isRead }
            : book
        )
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;