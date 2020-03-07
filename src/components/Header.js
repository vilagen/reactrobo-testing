import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  // what would make this particular command dangerous is that, if false, it will NEVER update, even of props, a state, or something changes. Usually, it is set to true.
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // };

  render () {
    // console.log('Header');
    return (
      <div>
       <h1 className='f1'>RoboFriends</h1>
       <CounterButton color={'red'} />
      </div>
    );
  };
};

export default Header;