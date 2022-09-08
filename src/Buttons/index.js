import React from 'react'
import './buttons.css'
const Button= (props) => {
    const{btnType,btnText,btnonClick,CustomClass}=props;
  return (
    <>
    <div className={`${
      btnType==='PRIMARY' 
      ? `button primary-btn ${CustomClass}`
      : `button secondary-btn ${CustomClass}`
    }`}
    onClick={btnonClick}
    >{btnText}</div>
    </>
  )
 
   
}


export default Button