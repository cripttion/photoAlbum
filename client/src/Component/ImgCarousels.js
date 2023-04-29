import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1622750660403-f0ccf7220fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    alt: 'First slide',
    caption: 'First slide caption',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1622750660403-f0ccf7220fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    alt: 'Second slide',
    caption: 'Second slide caption',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1622750660403-f0ccf7220fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    alt: 'Third slide',
    caption: 'Third slide caption',
  },
];

function ImgCarousels() {
  return (
    <div>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img className="w-full" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImgCarousels;
