import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';


describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Checkbox checked={false} onDone={jest.fn()}/>);
    const instance = wrapper.html();
    expect(instance).toMatchSnapshot();
  });

  it('onChange is called when check box is clicked', () => {
    const wrapper = shallow(<Checkbox checked={false} onDone={jest.fn()} />);
    wrapper.find('input').simulate('change');
    expect(wrapper.props().onChange).toHaveBeenCalledTimes(1);
  });
});
