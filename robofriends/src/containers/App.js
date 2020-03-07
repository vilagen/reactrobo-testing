import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) //same as doing requestRobots(dispatch)
    };
};

// so it seems like the state is the parent, the objects in it are the children (props). 

class App extends Component {

    constructor() {
    super()
    this.state = {
        count: 1,
    };
};

//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             // searchfield: ''
//         }
//         console.log('constructor');
//     };

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    //         console.log(this.state.searchfield);
    // };

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }));
    // };

     componentDidMount() {
        // if(process.env.NODE_ENV === 'production') {

        // }
        console.log(process.env.REACT_APP_SAY_HI);
        this.props.onRequestRobots();
    };

    render() {
        // const { robots, searchfield } = this.state; // can remove because we are using redux and don't need the searchfield that was once active there.
        // const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            // return robot.name.toLowerCase().includes(searchfield.toLowerCase()) // commented out after using redux.
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
        // return  (!robots.length) ? //!robots.length is saying the same thing as robots.length === 0
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header />
                    {/* <SearchBox searchChange={this.onSearchChange} /> */}
                    <SearchBox searchChange={onSearchChange} /> 
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
                // calling robots from state, and state is calling robots from importing robots.js file. CarldList has a map function breaking down the objects for each index
            )        
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App); //connect accepts 2 perameters