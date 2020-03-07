import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import renderer from 'react-test-renderer';

// it('expect to render Card component', () => {
//   expect(shallow(<Card />).length).toEqual(1);
// });

// we need to fix how to snapshot test given that it doesn't work this way anymore after an update. 
// Try looking at 

// it('expect to render CardList component', () => {
//   const mockRobots = [
//     {
//       id: 1,
//       name: 'John Snow',
//       username: 'JohnJohn',
//       email: 'john@gmail.com',
//     },
//   ];
//   const cardListRender = renderer
//   .create(<CardList robots={mockRobots} />)
//   .toJSON();
//   expect(cardListRender).toMatchSnapshot();
// });

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});