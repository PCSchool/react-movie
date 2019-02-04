import React, { Component } from 'react';
import Slider from "react-slick";
import Card from './Card';

class Carousel extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  } 

  updateArrow(props) {
    const { className, style, onClick } = props;
    console.log(className);
    return (
      <div
        className={"movieSlider"}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }


  controlList(values){
    const arrow = <updateArrow />
    const settings = {
      dots: false,
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      nextArrow: <updateArrow />,
      prevArrow: <updateArrow />
    };
    if (values !== undefined){
      const list = values.map((movie) => 
        <div key={movie.id}>
          <Card name={movie.title} id={movie.id} image={movie.poster_path} score={movie.vote_average} updateMovie={this.props.updateMovie}/>
        </div>);
      return <Slider {...settings}>
      {list}
    </Slider>
    }
  }

  render() {
    const list = this.controlList(this.props.values);
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Carousel