import React, { Component } from 'react';
import {Row, Col, Table, Grid} from 'react-bootstrap';
import profileImage from './images/profile.jpg';

class ActorCard extends Component {

    getImage(profilePath){
        if(profilePath  !== undefined && profilePath !== null){
            return "http://image.tmdb.org/t/p/w185//" + profilePath;
        }
        return profileImage;
    }

    render() { 
    const srcImg= this.getImage(this.props.values.profile_path);
    return (
        <div>
            <img src={srcImg} alt={this.props.values.character}/>
            <div id="right">
                <h4>{this.props.values.name}</h4>
                <p><span className="glyphicon glyphicon-user"></span>  {this.props.values.character}</p>
            </div> 
            
        </div>
      
    );
  }
}

export default ActorCard;