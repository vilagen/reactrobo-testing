import React from 'react';

const SearchBox = ( { searchfield, searchChange } ) => {
  console.log('Searchbox');
  return (
    <div className='pa2'>
      <label>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search' 
          placeholder='Search Robots' 
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;