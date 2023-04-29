import React from 'react'
import ImgCarousels from './ImgCarousels'
import Imgcards from './Imgcards'
import { Row ,Col, Container} from 'react-bootstrap';
import Testing from './Testing';


function Home() {
  return (
    <div>
     <div className='grid grid-cols-1 mt-5 m-1'>
       <ImgCarousels />
     </div>
     <div className='grid gap-7 w-full justify-items-center mt-5 sm:grid-cols-1 md:grid-cols-4'>
       <Imgcards
           name="Bibek & buggu"
           link="https://picsum.photos/800/302/?random"
           /> 
           <Imgcards
           name="Bibek & buggu"
           link="https://picsum.photos/800/304/?random"
           /> 
           <Imgcards
           name="Bibek & buggu"
           link="https://images.unsplash.com/photo-1542995096-2e8bc2e739ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
           /> 
           <Imgcards
           name="Bibek & buggu"
           link="https://picsum.photos/800/307/?random"
           /> 
     </div>
        
    </div>
  )
}

export default Home