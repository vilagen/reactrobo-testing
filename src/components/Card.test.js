import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

// it('expect to render Card component', () => {
//   expect(shallow(<Card />).length).toEqual(1);
// });

// we used react-test-renderer to create these snapshots
// the idea behind snapshots for our components is that a literal snapshot will be taken of our component
// if there are any unexpected changes, tests will show something has failed to match the snapshot we took.
// so this can help with unexpected changes.
// using react-test-renderer means that we are losing the functionality that comes with
// enzyme library.


it('expect to render Card component', () => {
  const cardRender = renderer.create(<Card />).toJSON();
  expect(cardRender).toMatchSnapshot();
});