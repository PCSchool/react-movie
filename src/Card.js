import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Table, Grid} from 'react-bootstrap';

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
      } 

    render() {
    const srcImg= "http://image.tmdb.org/t/p/w185//" + this.props.image;
    return (
    <div className="cardContainer" key={this.props.id} onClick={() => this.props.updateMovie({value: this.props.id})}>
        <img src={srcImg} alt={this.props.id}/>
        <p>{this.props.name} </p>
        <p><span className="glyphicon glyphicon-heart"></span> {this.props.score}</p>
    </div>
      
    );
  }
}

export default Card;