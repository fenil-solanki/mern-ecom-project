import React from 'react'
import { BsStarFill,BsStarHalf, BsStar } from 'react-icons/bs'

const RatingStar = ({stars}:any) => {
    console.log("Star : ",stars)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <BsStarFill   className='inline mx-2' style={{color:"#EDD146"}}/>
            ) : stars >= number ? (
              <BsStarHalf  className='inline mx-2' style={{color:"#EDD146"}}/>
            ) : (
              <BsStar  className='inline mx-2'  style={{color:"#EDD146"}}/>
            )}
          </span>
        );
      });
  return (
    <div className='inline'>
    {ratingStar}
    </div>
  )
}

export default RatingStar