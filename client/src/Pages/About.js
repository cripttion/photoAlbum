import React from 'react'
import ImgShowCase from '../Component/ImgShowCase'
import { Container } from 'react-bootstrap';

const About = () => {
  const imageUrls =[
   "https://picsum.photos/200/300?image=279",
   "https://picsum.photos/400/400?image=400",
   "https://picsum.photos/600/400?image=501",
   "https://picsum.photos/200/200?image=998",
   "https://picsum.photos/500/400?image=287",
   "https://picsum.photos/200/300?image=274",
   "https://picsum.photos/300/600?image=276",
   "https://picsum.photos/200/300?image=277",
   "https://picsum.photos/200/280?image=278",
   "https://picsum.photos/200/450?image=1022",
  ];
  return (
    <div>
      <h3 className='mt-5 font-mono text-center' style={{fontSize:'50px'}}>Nature is Beauty</h3>
     <div className='mt-5'>
      <ImgShowCase 
        imageUrls={imageUrls}
        columnCount="4"
        gap="5"
      />
     </div>
    </div>
  )
}

export default About