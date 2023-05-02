import React, { useState } from 'react';

function Testing() {
  const [bulbState, setBulbState] = useState(true);
  const [btnText, setBtnText] = useState("On");

  function changeBulbState() {
    if (bulbState === false) {
      setBulbState(true);
      setBtnText("On");
    } else {
      setBulbState(false);
      setBtnText("Off");
    }
  }

  return (
    <div className='grid justify-content-center'>
      {!bulbState&&<img src="https://st.depositphotos.com/1020618/2357/i/600/depositphotos_23575953-stock-photo-light-bulb.jpg" alt="bulb off" className='bulbImg'/>
       
      }
   {bulbState&&<img src="https://st.depositphotos.com/1020618/2357/i/600/depositphotos_23578147-stock-photo-light-bulb.jpg" alt="bulb off" className='bulbImg'/>}
      <div className="grid justify-center">
      <button onClick={changeBulbState} className='mt-5 bg-white text-black  grid align-item-center pl-10  pr-10 border rounded-lg text-center text-bold'>{btnText}</button>
      </div>
    </div>
  );
}

export default Testing;
