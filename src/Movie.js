import React, { Component } from 'react';
import {Row, Col, Table, Grid, Panel} from 'react-bootstrap';
import ActorList from './ActorList';
import Carousel from './Carousel';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            genres: []
        }
    }

    componentWillUpdate(prevProps, prevState){
        console.log('component did update')  
    }

    controlRuntime(minutes){
      var hours = (minutes / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + ":" + rminutes;
    }

    controlList(values){
      if (values !== undefined && values.length > 0){
        const list = values
        .map((genre) => <li key={genre.id}>{genre.name}</li>)
        .reduce((prev, curr) => [prev, <li>{" / "}</li>, curr])
        ;
        return <ul>{list}</ul>
      }
      return <ul><li>No genres registered</li></ul>
    }
    controlMovies(values){
      console.log(values);
      const srcImg = "http://image.tmdb.org/t/p/w185//";
      if (values !== undefined){
        const list = values.map((genre) => 
          <Col sm={2} key={genre.id}>
            <Row>
              <img onClick={() => this.onClick(genre)} className="imdGallery" src={srcImg + genre.poster_path} />
            </Row>
            <Row>
              <h3>{genre.title}</h3>
            </Row>
          </Col>);
        return <Row>{list}</Row>
      }
      return <ul><li>No genres registered</li></ul>
    }

    render() {
        console.log(this.props.movie);
        const max = this.props.actors.length;
        const medium = max / 2;
        const actors = this.controlList(this.props.actors);
        const srcImg= "http://image.tmdb.org/t/p/w185//" + this.props.movie.poster_path
        const genres = this.controlList(this.props.genres);
        const runtime = this.controlRuntime(this.props.movie.runtime);
        return (
          <div>
              <Grid>
                <Row>
                  <p id="movieTitle">{this.props.movie.title}</p>
                  <p id="movieTagline">{this.props.movie.tagline}</p>
                </Row>
                <Row className="headerMovie">
                  <Col sm={3} md={3} >
                    <Row>
                    <div id="movieImage">
                      <a href={this.props.movie.homepage}>
                      <img src={srcImg} alt="movie" />
                      </a>
                    </div>
                      

                    </Row>
                  </Col>
                  <Col sm={7} md={7} id="movieInfo">
                    <Row>
                      <h3>{this.props.movie.overview}</h3>
                    </Row>
                    <Row>
                      <h3 className="color"><b>{genres}</b></h3>
                    </Row>
                    <Row>
                      <h4 id="movieRelease">{this.props.movie.status} {this.props.movie.release_date}</h4>
                    </Row>
                    <Row>
                      
                    </Row>
                    <Row>
                      <Col sm={5} md={5}>
                      <h3 className="color">Popularity:</h3>
                      <h4><span className="	glyphicon glyphicon-user"></span> {this.props.movie.popularity}</h4>
                      </Col>
                      <Col sm={5} md={5}>
                      <h3 className="color">Budget:</h3>
                      <h4><span className="glyphicon glyphicon-usd"></span> {this.props.movie.budget}</h4>
                      </Col>
                    </Row>
                    <Row>
                    <Col sm={5} md={5}>
                      <h3 className="color">Vote count:</h3>
                      <h4><span className="glyphicon glyphicon-film"></span> {this.props.movie.vote_count}</h4>
                      </Col>
                      <Col sm={5} md={5}>
                      <h3 className="color">Average vote:</h3>
                      <h4><span className="glyphicon glyphicon-heart"></span> {this.props.movie.vote_average}</h4>
                      </Col>
                    </Row>
                  </Col>
                  </Row>
                  <Row>
                    
                    <Panel id="collapsible-panel-example-2">
                    <Col sm={12} md={12}>
                      <Panel.Heading>
                        <Panel.Title toggle>
                        <h3 className="headerSubtitle">Crew</h3>
                        </Panel.Title>
                        </Panel.Heading>
                          <Panel.Collapse>
                        <Panel.Body>  
                          <Col sm={6} md={6}>
                          <ActorList values={this.props.actors.slice(0, medium)}/>
                          </Col>
                          <Col sm={6} md={6}>
                          <ActorList values={this.props.actors.slice(medium, max)}/>
                          </Col>
                        </Panel.Body>
                      </Panel.Collapse>
                      </Col>
                    </Panel>
                    
                  </Row>
                  <Row>

                  <Col sm={12} md={12}>
                  <h3 className="headerSubtitle">Similar movies</h3>
                  <Carousel values={this.props.similar} updateMovie={this.props.updateMovie}></Carousel>

                    </Col>
                  </Row>
                </Grid>
            </div>
        );
      }
}

export default Movie