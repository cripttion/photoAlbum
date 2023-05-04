import React, { useState } from 'react';
import Imgcards from '../Component/Imgcards';
import ImgShowCase from '../Component/ImgShowCase';
import Images from '../Images';
function ImageUpload()
{
  
}
const Create = () => {
  const[image,setImage] = useState("");
  const length = Images.length;
  const[id,setId] = useState(length);
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      // console.log(reader.result); 

      setImage(reader.result);
      setId(id+1);
      let newImg = {id:id,url:image};
      Images.push(newImg);
      
    }
    reader.onerror = error =>{
      console.log("Error: ",error);
  };
  
  }
  

  return (
    <div>
        <input
          accept="image/*"
          type="file"
          onChange={convertToBase64}
         />
         {image==""||image==null?"":<ImgShowCase imageUrls={Images} columnCount="4" gap="5" />}
    </div>
  )
}

export default Create