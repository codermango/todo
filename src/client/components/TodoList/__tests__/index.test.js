import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../index';


describe('<TodoList />', () => {

  const props = {
    todos: [
      { id: 'id1', text: 'text1', done: false },
      { id: 'id2', text: 'text2', done: false },
      { id: 'id3', text: 'text3', done: false }
    ],
    updateAll: jest.fn()
  };

  it('renders correctly', () => {
    const wrapper = shallow(<TodoList {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  it('handleDragStart works correctly', () => {
    const wrapper = shallow(<TodoList {...props} />);
    const instance = wrapper.instance();
    instance.handleDragStart(0)(null);
    expect(instance.draggedItem).toEqual(props.todos[0]);
  });

  it('handleDragOver works correctly', () => {
    const wrapper = shallow(<TodoList {...props} />);
    const instance = wrapper.instance();
    instance.handleDragStart(0)(null);
    instance.handleDragOver(1)(null);
    expect(instance.props.updateAll).toHaveBeenCalledTimes(1);

    instance.props.updateAll.mockClear();
    instance.handleDragStart(0)(null);
    instance.handleDragOver(0)(null);
    expect(instance.props.updateAll).toHaveBeenCalledTimes(0);
  });
});
