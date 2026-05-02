import React from "react";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../redux/store/actionTypes";
import "../App.css";

const FilterPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="big">
      <button className="knopka2" onClick={() => dispatch({ type: SET_FILTER, payload: "ALL" })}>
        All
      </button>
      <button className="knopka2" onClick={() => dispatch({ type: SET_FILTER, payload: "READ" })}>
        Done
      </button>
      <button className="knopka2" onClick={() => dispatch({ type: SET_FILTER, payload: "UNREAD" })}>
        In Process
      </button>
    </div>
  );
};

export default FilterPanel;