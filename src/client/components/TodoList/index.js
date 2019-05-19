import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import { updateAll } from '../../actions';

import styles from './styles.css';

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    updateAll: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.draggedItem = null;
  }

  handleDragStart = idx => () => {
    const { todos = [] } = this.props;
    this.draggedItem = todos[idx];
  }

  handleDragOver = idx => () => {
    const { todos = [] } = this.props;
    const draggedOverItem = todos[idx];
    if (this.draggedItem.id === draggedOverItem.id) {
      return;
    }

    const newTodos = todos.filter(todo => todo.id !== this.draggedItem.id);
    newTodos.splice(idx, 0, this.draggedItem);
    this.props.updateAll({ todos: newTodos });
  }

  render() {
    const { todos = [] } = this.props;

    return (
      <div className={styles.todoList} data-test-id="todo-list">
        {todos.map((todo, idx) => (
          <TodoItem
            key={todo.id}
            data={todo}
            draggable={Boolean(true)}
            onDragStart={this.handleDragStart(idx)}
            onDragOver={this.handleDragOver(idx)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  updateAll: ({ todos }) => dispatch(updateAll({ todos }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
