import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../index';


describe('<TodoItem />', () => {

  const props = {
    data: { id: 'id1', text: 'text1', done: false },
    toggleTodo: jest.fn(),
    deleteTodo: jest.fn()
  };

  it('renders correctly', () => {
    const wrapper = shallow(<TodoItem {...props} />);
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it('handleDone works correctly', () => {
    const wrapper = shallow(<TodoItem {...props} />);
    const instance = wrapper.instance();
    instance.handleDone();
    expect(instance.props.toggleTodo).toHaveBeenCalledTimes(1);
  });

  it('handleDeleteTodo works correctly', () => {
    const wrapper = shallow(<TodoItem {...props} />);
    const instance = wrapper.instance();
    instance.handleDeleteTodo();
    expect(instance.props.deleteTodo).toHaveBeenCalledTimes(1);
  });
});
