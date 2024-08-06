import React from 'react'
import "../App.css";

const Text = ({value}) => {
   

  

  return (
    <div>
  <textarea  className="json" value={value} readOnly>
  </textarea>
    </div>
  )
}

export default Text
