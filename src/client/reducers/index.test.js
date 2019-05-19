import reducer from './index';
import * as types from '../constants';

jest.mock('uuid/v4');

describe('reducer work correctly', () => {

  const initialState = [
    { id: 'id1', text: 'text1', done: false },
    { id: 'id2', text: 'text2', done: false },
    { id: 'id3', text: 'text3', done: false }
  ];

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    const action = {
      type: types.ADD_TODO,
      id: 'id4',
      text: 'text4'
    };
    const expectedState = [
      ...initialState,
      { id: 'id4', text: 'text4', done: false }
    ];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_TODO', () => {
    const action = {
      type: types.DELETE_TODO,
      id: 'id1'
    };
    const expectedState = [
      { id: 'id2', text: 'text2', done: false },
      { id: 'id3', text: 'text3', done: false }
    ];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_TODO', () => {
    const action = {
      type: types.TOGGLE_TODO,
      id: 'id1'
    };
    const expectedState = [
      { id: 'id1', text: 'text1', done: true },
      { id: 'id2', text: 'text2', done: false },
      { id: 'id3', text: 'text3', done: false }
    ];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_ALL', () => {
    const action = {
      type: types.CLEAR_ALL
    };
    expect(reducer(initialState, action)).toEqual([]);
  });

  it('should handle UPDATE_ALL', () => {
    const action = {
      type: types.UPDATE_ALL,
      todos: [
        { id: 'id4', text: 'text4', done: false }
      ]
    };
    const expectedState = [
      { id: 'id4', text: 'text4', done: false }
    ];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
