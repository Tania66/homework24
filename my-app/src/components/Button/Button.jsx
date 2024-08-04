import React from 'react'
import { Button } from 'react-bootstrap';

const ButtonInput = ({handleClick}) => {

    
  return (
    <div>
       <Button  variant="primary" onClick={handleClick}> 
Find &#32;<i className="bi bi-camera-reels"></i> 
</Button>
    </div>
  )
}

export default ButtonInput
