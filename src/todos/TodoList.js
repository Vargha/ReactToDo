import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className='list-wrapper'>
    <h1>Todo List App</h1>
    <NewTodoForm />
    {todos.map((todo, i) => <TodoListItem key={i} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed}/>)}
  </div>
);


const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
