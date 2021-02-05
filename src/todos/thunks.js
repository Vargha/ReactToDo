import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    displayAlert(e);
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
