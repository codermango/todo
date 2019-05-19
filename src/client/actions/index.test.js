import uuidv4 from 'uuid/v4';
import * as actions from './index';
import * as types from '../constants';

jest.mock('uuid/v4');

describe('actions works correctly', () => {
  it('should create addTodo action', () => {
    uuidv4.mockReturnValue('id')
    const data = { text: 'text' };
    const expectedAction = {
      type: types.ADD_TODO,
      id: 'id',
      text: 'text'
    }
    expect(actions.addTodo(data)).toEqual(expectedAction)
  });

  it('should create deleteTodo action', () => {
    const data = { id: 'id' };
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 'id'
    };
    expect(actions.deleteTodo(data)).toEqual(expectedAction);
  });

  it('should create toggleTodo action', () => {
    const data = { id: 'id' };
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: 'id'
    };
    expect(actions.toggleTodo(data)).toEqual(expectedAction);
  });

  it('should create clearAll action', () => {
    const expectedAction = {
      type: types.CLEAR_ALL
    };
    expect(actions.clearAll()).toEqual(expectedAction);
  });

  it('should create updateAll action', () => {
    const data = [
      { id: 'id1', text: 'text1', done: false },
      { id: 'id2', text: 'text2', done: false },
      { id: 'id3', text: 'text3', done: false },
    ];
    const expectedAction = {
      type: types.UPDATE_ALL,
      todos: data
    };
    expect(actions.updateAll({ todos: data })).toEqual(expectedAction);
  });
});
