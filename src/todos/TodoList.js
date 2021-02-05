import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from "./actions";
import { isLoading } from "./reducers";
import { loadTodos } from "./thunks";


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
  isLoading: state.isLoading,
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
