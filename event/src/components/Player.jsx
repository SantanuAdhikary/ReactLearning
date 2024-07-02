import React from 'react'

const Player = ({data}) => {
  console.log(data)
  let {link,imageUrl} = data;

  let handleClick = ()=>{

    const audio = new Audio(link);
    audio.play();
  }
 
  return (
    <div>
      <picture>
        <img src={imageUrl} alt="image" onClick={handleClick} />
      </picture>
    </div>
  )
}

export default Player
