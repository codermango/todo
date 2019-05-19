import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, onDone }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onDone}
    data-test-id="checkbox"
  />
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onDone: PropTypes.func.isRequired
};

export default Checkbox;
