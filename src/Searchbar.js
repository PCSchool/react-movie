import React, { Component } from 'react';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import {MdSearch, MdAdd, MdRemove} from 'react-icons/md';
import axios from 'axios';
import Select from 'react-select';
import SearchList from './SearchList';
import Container from './Container';

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            return_query:'',
            movies: [],
            selectedOption: null,
            id_: null,
            base_query: 'https://api.themoviedb.org/3/search/movie?api_key=b68c3e3b6df08dc2ae75fa865ddb9e40&query=',
            key: 'b68c3e3b6df08dc2ae75fa865ddb9e40',
            isLoading: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){

    }

    onclick(event){
        console.log(this.state.movies)
        this.props.callbackQuery(this.state.return_query);
    }

    handleChange(selectedOption){
        this.setState({selectedOption: selectedOption});
        console.log(this.state.selectedOption)
    }

    updateSearch(movie){
        console.log(movie)
    }

    render() {
    return (
        <div className="header">
            <div id="headerLogo">
                        <a href="https://www.themoviedb.org/">
                            <img src="https://www.themoviedb.org/assets/1/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png" alt="theMovieDB"/>
                        </a>
                    </div>
            <div >
                <h2>React - Movie Database DB</h2>
                <div id="headerSearch">
                    <SearchList movies={this.state.movies} updateSearch={this.props.updateMovie} />
                </div>
            </div>
        </div>
    );
  }
}

export default Searchbar;


