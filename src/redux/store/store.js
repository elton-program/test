import { createStore } from "redux";
import rootReducer from "./reducer";

const loadState = () => {
  try {
    const data = localStorage.getItem("booksState");
    if (!data) return undefined;
    return JSON.parse(data);
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("booksState", JSON.stringify(state));
  } catch {}
};

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;