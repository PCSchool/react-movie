import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';import SearchList from './SearchList';
import Movie from './Movie';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            error: '',
            movie: [],
            genres: [],
            actors: [],
            similar: []
        }

        this.fetchResult =  this.fetchResult.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }

    componentDidUpdate(){
        window.scrollTo(0, 0)
    }

    fetchResult(id){
        console.log(this.state.movie)
        this.setState({title: id.title})
    }

    onclick(e){
        console.log('click');
    }


    updateOptions(value, callback) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=b68c3e3b6df08dc2ae75fa865ddb9e40&query=' + value + '&language=en-US&page=1&include_adult=false')
        .then(result => {
            const requestResults = result.data.results.map(function(movie){return {value: movie.id, label: movie.title}})
           callback(requestResults)
        })
        .catch(error => 
            console.log(error)
        );   
    }

    updateMovie(movie){
        axios.all([
            axios.get('https://api.themoviedb.org/3/movie/' + movie.value + '?api_key=b68c3e3b6df08dc2ae75fa865ddb9e40'),
            axios.get('https://api.themoviedb.org/3/movie/' + movie.value + '/credits?api_key=b68c3e3b6df08dc2ae75fa865ddb9e40'),
            axios.get('https://api.themoviedb.org/3/movie/' + movie.value + '/recommendations?api_key=b68c3e3b6df08dc2ae75fa865ddb9e40&language=en-US')
        ])
        .then(axios.spread((movie, actors, similar) => {
            this.setState({movie: movie.data});
            this.setState({genres: movie.data.genres});
            this.setState({actors: actors.data.cast.slice(0, 10)});
            this.setState({similar: similar.data.results.slice(0, 10)})
        }));
    }

    componentDidMount(value){
        this.updateMovie({value: '550', label: 'Fight Club'})
    }
    changeQuery(e){
        console.log(e);
    }

  render() {
    return (
        <div className="mainContainer">
            <Searchbar callbackQuery={this.changeQuery} updateMovie={this.updateMovie}/>
            <Movie updateMovie={this.updateMovie} actors={this.state.actors} genres={this.state.genres} movie={this.state.movie} similar={this.state.similar}/>
        </div>
    );
  }
}

export default Container;


