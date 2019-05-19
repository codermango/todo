import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteButton from '../DeleteButton';
import Checkbox from '../Checkbox';
import { deleteTodo, toggleTodo } from '../../actions';

import styles from './styles.css';

class TodoItem extends Component {

  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    data: PropTypes.shape({
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired
  }

  handleDone = () => {
    const { data = {}, toggleTodo } = this.props;
    toggleTodo({ id: data.id });
  }

  handleDeleteTodo = () => {
    const { data = {}, deleteTodo } = this.props;
    deleteTodo({ id: data.id });
  }

  render() {
    const {
      data = {},
      draggable,
      onDragStart,
      onDragOver
    } = this.props;
    return (
      <div
        className={styles.todoItem}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        data-test-id="todo-item"
      >
        <Checkbox checked={data.done} onDone={this.handleDone} />
        <span className={styles.text}>{data.text}</span>
        <DeleteButton onDelete={this.handleDeleteTodo} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: ({ id }) => dispatch(deleteTodo({ id })),
  toggleTodo: ({ id }) => dispatch(toggleTodo({ id }))
});

export default connect(null, mapDispatchToProps)(TodoItem);
