import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_ALL,
  UPDATE_ALL
} from '../constants';

const initialState = [
  { id: 1, text: 'text1', done: false },
  { id: 2, text: 'text2', done: false },
  { id: 3, text: 'text3', done: false },
  { id: 4, text: 'text4', done: false }
];

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case CLEAR_ALL:
      return [];
    case UPDATE_ALL:
      return action.todos
    default:
      return state;
  }
}

export default todoReducer;
