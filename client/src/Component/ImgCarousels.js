import React from 'react'
import {Carousel} from '3d-react-carousal';


let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1"  width='500' height={'700px'} />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
function ImgCarousels() {
    
    return (
    <div>
    <Carousel className="w-100" slides={slides} autoplay={true} interval={3000} arrows={false}/>
  
    </div>
  )
}

export default ImgCarousels