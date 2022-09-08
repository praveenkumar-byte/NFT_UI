import React from 'react'
import './integrat.css';
const BrandIntegration = () => {
  return (
    <div className='brand-integration max-width absolute-center'>
      <img  className="logo-class"
       src={require('../../image/integrate.png')}
        alt='my-brand'/>
    </div>
  )
}

export default BrandIntegration