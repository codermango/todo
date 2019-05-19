import React, { Component } from 'react';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';

import styles from './styles.css';


class App extends Component {

  render() {
    return (
      <div className={styles.appContainer}>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}

export default App;
