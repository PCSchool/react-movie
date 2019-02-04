import React, { Component } from 'react';
import './Style.css';
import Container from './Container';
import axios from 'axios';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      query: '',
      movies: []
    }

    this.changeQuery.bind(this);
  }



  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=b68c3e3b6df08dc2ae75fa865ddb9e40')
    .then(result => 
      this.setState({
        movies: result.data,
        isLoading: false
      }))
    .catch(error => 
      this.setState({
        error,
        isLoading: false
      }));
  }

  changeQuery(e){
    console.log(e);
    
  }

  onclick(e){
     console.log('click');
  } 

  render() {
    return (
      <div className="app">
        <Container />
      </div>
    );
  }
}

export default App;
