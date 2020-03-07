import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render counter', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red'
  const wrapper = (shallow(<CounterButton color={mockColor}/>))

  wrapper.find('[id="counter"]').simulate('click'); // this is simulating us clicking the count button
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual('red');
});