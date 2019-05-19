import uuidv4 from 'uuid/v4';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_ALL,
  UPDATE_ALL
} from '../constants';

export function addTodo({ text }) {
  return {
    type: ADD_TODO,
    id: uuidv4(),
    text
  };
}

export function deleteTodo({ id }) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function toggleTodo({ id }) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  };
}

export function updateAll({ todos }) {
  return {
    type: UPDATE_ALL,
    todos
  };
}
