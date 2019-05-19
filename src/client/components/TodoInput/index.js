import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

import styles from './styles.css';

class TodoInput extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  handleKeyUp = (e) => {
    const { value } = this.state;
    if(e.keyCode === 13 && value) { // Enter
      this.props.addTodo({ text: this.state.value });
      this.setState({ value: '' });
    }
  }

  handleChange = (e) => {
    e.persist();
    const value = e.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <div className={styles.todoInput}>
        <input
          className={styles.input}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          data-test-id="todo-input"
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: ({ text }) => dispatch(addTodo({ text }))
});

export default connect(null, mapDispatchToProps)(TodoInput);
