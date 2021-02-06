import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";


const TodoList = ({
  completedTodos=[],
  incompleteTodos=[],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos
}) => {
  useEffect(()=> {
    startLoadingTodos();
  }, [])
  const loadingMessage = <div>Loading Todos...</div>
  const content = (
    <div className='list-wrapper'>
      <h1>Todo List App</h1>
      <NewTodoForm/>
      <h3>Incomplete Tasks</h3>
      {incompleteTodos.map((todo, i) => <TodoListItem
        key={i}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}/>)}
      <h3>Completed Tasks</h3>
      {completedTodos.map((todo, i) => <TodoListItem
        key={i}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}/>)}
    </div>
  );
  return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});
const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
