import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAll } from '../../actions';

import styles from './styles.css';

class TodoFooter extends Component {

  static propTypes = {
    clearAll: PropTypes.func.isRequired
  }

  handleClearAll = () => {
    this.props.clearAll();
  }

  render() {
    return (
      <div className={styles.todoFooter}>
        <button onClick={this.handleClearAll}>Clear All</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(clearAll())
});

export default connect(null, mapDispatchToProps)(TodoFooter);
