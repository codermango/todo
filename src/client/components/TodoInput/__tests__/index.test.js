import React from 'react';
import { shallow } from 'enzyme';
import TodoInput from '../index';


describe('<TodoInput />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TodoInput addTodo={jest.fn()} />);
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it('handleChange works correctly', () => {
    const wrapper = shallow(<TodoInput addTodo={jest.fn()} />);
    const instance = wrapper.instance();
    const mockEvent = { persist: jest.fn(), target: { value: 'test' } };
    wrapper.find('input').simulate('change', mockEvent);
    expect(instance.state.value).toEqual('test');
  });

  describe('handleKeyUp works correctly', () => {
    const wrapper = shallow(<TodoInput addTodo={jest.fn()} />);
    const instance = wrapper.instance();

    beforeEach(() => {
      instance.props.addTodo.mockClear();
    });

    it('addTodo is called when user press Enter with value', () => {
      const mockEvent = { keyCode: 13 };
      wrapper.setState({ value: 'test' });
      wrapper.find('input').simulate('keyup', mockEvent);
      expect(instance.props.addTodo).toHaveBeenCalledTimes(1);
      expect(instance.state.value).toEqual('');
    });

    it('addTodo is not called when user press Enter without value', () => {
      const mockEvent = { keyCode: 13 };
      wrapper.find('input').simulate('keyup', mockEvent);
      expect(instance.props.addTodo).toHaveBeenCalledTimes(0);
    });

    it('addTodo is not called when user press other key with a value', () => {
      const mockEvent = { keyCode: 12 };
      wrapper.setState({ value: 'test' });
      wrapper.find('input').simulate('keyup', mockEvent);
      expect(instance.props.addTodo).toHaveBeenCalledTimes(0);
    });
  });
});
