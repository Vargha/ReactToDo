export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text },
});

export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const markTodoAsCompleted = text => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});

export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
