import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import "react-select/dist/react-select.css";
import axios from 'axios';
import { bindCallback } from 'rxjs';

class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: "", 
            searchOn: false
        }
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

    checkForPreLoad(){
        return true
    }

    noOptionsMessage(){
        return "Type to search for movies";
    }

    handleItemSelectChange(option){
        console.log(option.value);
    }

  render() {
    return (
        <div className="headerSearchList">
            <AsyncSelect 
                    cacheOptions={true}
                    defaultOptions={this.checkForPreLoad()}
                    loadOptions={this.updateOptions} 
                    onChange={(option) => this.props.updateSearch(option)}
                    value={this.state.input}
                    noOptionsMessage={this.noOptionsMessage}
                    className="react-selector"
                />
        </div>
    );
  }
}

export default SearchList;