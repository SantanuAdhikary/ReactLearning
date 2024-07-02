import React from 'react'
import Player from './Player'

const Video = ({videoArr}) => {
    // console.log(videoArr)
  
  return (
    <>
      {
        videoArr.map((vdo,index)=>(
            <div key={index}>
                <Player key={index} data={vdo}/>
            </div>
        ))
      }
    </>
  )
}

export default Video
