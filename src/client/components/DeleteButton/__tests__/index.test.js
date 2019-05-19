import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from '../index';


describe('<DeleteButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DeleteButton onDelete={jest.fn()} />);
    const instance = wrapper.html();
    expect(instance).toMatchSnapshot();
  });

  it('onClick is called when delete button is clicked', () => {
    const wrapper = shallow(<DeleteButton onDelete={jest.fn()} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.props().onClick).toHaveBeenCalledTimes(1);
  });
});
