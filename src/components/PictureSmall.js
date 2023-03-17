

const PictureSmall = ({image, idNum, setPicture, setTo}) => {

  const toggleHandler = (e) => {
    e.preventDefault()
    console.log(e)
    setPicture(setTo)
  }

  return (
    <>

    <img style={{
      "height" : '75px',
      'border' : '3px solid white',
      "borderRadius" : '10%',
      'margin' : "25px 25px 0px 0px"
    }} src = {image} id = {idNum} alt={idNum} onClick = {toggleHandler} ></img>

    </>
  )
}

export default PictureSmall