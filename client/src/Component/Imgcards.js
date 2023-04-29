import React from 'react'
import {Card} from "react-bootstrap" 
import Images from '../Images'
function Imgcards(props) {
  return (
    <div>
    <div className='inline-block  transform hover:scale-105 transition duration-200 ease-in-out w-auto border  shadow-gray-950 shadow-md rounded-xl' >
    <Card style={{width:'18rem'}} className='p-2'>
        <Card.Img  className="0" variant="top" src={Images[0].link}/>
      <Card.Title className='mb-5 mt-5 text-center italic font-medium text-2xl mt-2'>{props.name}</Card.Title>
      </Card>
      {/* <Card.Text className='text-center'>Wedding</Card.Text> */}

      </div>
    </div>
// {Text[0].navLink1}
  )
}

export default Imgcards

