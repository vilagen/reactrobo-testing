import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED 
} from './constants.js';

import * as reducers from './reducers';

// remember that reducers take two things: a state, and an action.
describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'Clementine'
    })).toEqual({ 
      searchField: 'Clementine',
    });
  });
});

describe('requestRobots', () => {

  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: '',
  };

  it('should return the initial Robot state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING,
      // payload: { isPending: true } don't need this because reducer is already set to change pending to true.
    })).toEqual({
      robots: [],
      isPending: true,
      error: '',
    })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com',
      }]
      // payload: { isPending: true } don't need this because reducer is already set to change pending to true.
    })).toEqual({
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com',
      }],
      isPending: false,
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NOOOOOOOOOOOOO!!!',
    })).toEqual({
       error: 'NOOOOOOOOOOOOO!!!',
       robots: [],
       isPending: false,
    });
  });

})