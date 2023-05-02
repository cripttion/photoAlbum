// import React from 'react'
// import {Carousel} from '3d-react-carousal';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Images from '../Images';

const settings = {
  dots: true, // Show navigation dots
  infinite: true, // Allow infinite scrolling
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 4, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll per navigation
 // set autoplay speed in milliseconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function ImgCarousels() {
    
    return (
    <div>
    <Slider {...settings}>
      {Images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={`Image ${image.id}`} className='p-4 transition duration-500 hover:scale-125' />
        </div>
      ))}
    </Slider>
  
    </div>
  )
}

export default ImgCarousels