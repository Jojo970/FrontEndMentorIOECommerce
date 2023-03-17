import {useState} from 'react';
import PictureSmall from './PictureSmall';

import Icon1 from "../images/image-product-1.jpg";
import Icon2 from "../images/image-product-2.jpg";
import Icon3 from "../images/image-product-3.jpg";
import Icon4 from "../images/image-product-4.jpg"; 

import Thumb1 from "../images/image-product-1-thumbnail.jpg";
import Thumb2 from "../images/image-product-2-thumbnail.jpg";
import Thumb3 from "../images/image-product-3-thumbnail.jpg";
import Thumb4 from "../images/image-product-4-thumbnail.jpg";

const Pictures = () => {
  const [picture, setPicture] = useState(Icon1);



  const thumbNails = [
    {image: Thumb1,
    idNum: 1,
    setter: Icon1},
    {image: Thumb2,
      idNum: 2,
      setter: Icon2},
    {image: Thumb3,
      idNum: 3,
      setter: Icon3},
    {image: Thumb4,
      idNum: 4,
      setter: Icon4}
  ]

  return (
    <div>
      <img style={{
      "height" : '400px',
      "borderRadius" : '5%'
    }} src= {picture} alt = "largeImage"></img>
      <div>
        {
          thumbNails.map((thumbNail) => {
            return <PictureSmall image = {thumbNail.image} idNum = {thumbNail.idNum}  setTo = {thumbNail.setter} setPicture = {setPicture}/>
          })
        }
      </div>
    </div>
  )
}

export default Pictures