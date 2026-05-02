import React from "react";
import "./App.css";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import FilterPanel from "./components/FilterPanel";

const App = () => {
  return (
    <div className="container">
      <BookInput />
      <FilterPanel />
      <BookList />
    </div>
  );
};

export default App;