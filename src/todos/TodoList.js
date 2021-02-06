import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";
import { getTodos, getTodosLoading } from "./selectors";


const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(()=> {
    startLoadingTodos();
  }, [])
  const loadingMessage = <div>Loading Todos...</div>
  const content = (
    <div className='list-wrapper'>
      <h1>Todo List App</h1>
      <NewTodoForm/>
      {todos.map((todo, i) => <TodoListItem key={i} todo={todo} onRemovePressed={onRemovePressed}
                                            onCompletedPressed={onCompletedPressed}/>)}
    </div>
  );
  return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  todos: getTodos(state),
});
const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
