import React from 'react';
import { shallow } from 'enzyme';
import TodoFooter from '../index';


describe('<TodoFooter />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TodoFooter clearAll={jest.fn()} />);
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it('clearAll is called when clear all button is clicked', () => {
    const wrapper = shallow(<TodoFooter clearAll={jest.fn()} />);
    const instance = wrapper.instance();
    wrapper.find('button').simulate('click');
    expect(instance.props.clearAll).toHaveBeenCalledTimes(1);
  });
});
