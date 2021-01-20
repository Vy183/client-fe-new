import React, { Component } from "react";
import Slider from "react-slick";


import banner4 from '../../assest/img/banner4.jpg';
import banner5 from '../../assest/img/banner5.jpg';
import banner6 from '../../assest/img/banner6.jpg';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 12000,
      cssEase: "linear"
    };
    return (
      <div >
        <Slider {...settings}>
          <div>
            <img src={banner4} style={{height: '455px'}} alt=""/>
          </div>
          <div>
          <img src={banner5} style={{height: '455px'}} alt=""/>
          </div>
          <div>
          <img src={banner6} style={{height: '455px'}} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}