import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ onDelete }) => (
  <button onClick={onDelete} data-test-id="delete-button">X</button>
);

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export default DeleteButton;
