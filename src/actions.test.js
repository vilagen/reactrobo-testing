import * as actions from './actions';
import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED 
} from './constants.js';

// need redux store to dispatch states from store. 
// However, we need the redux-mock-store from frontend to test on backend.

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const text = 'wooo'
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

// we are testing asynchronos actions here.
it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots()); // we are using redux-thunk to dispatch the stored states to define on the expect function below.
  const action = store.getActions();
  // console.log('action', action);
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }
  // expect(actions.requestRobots()).toEqual(expectedAction);
  expect(action[0]).toEqual(expectedAction);
});