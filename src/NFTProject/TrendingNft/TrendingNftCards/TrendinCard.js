import React from 'react'
import './trendingcard.css'
const TrendinCard = (props) => {
  const { nft } = props;
  return (
    <div className='trending-card absolute-center'>
      <div className='wrapper'>
        <div className='content-tc'>
        
          <img alt={nft.userlabel} src={nft.imagebanner} className='banner' />
          
        </div>

      </div>
    </div>
  )
}

export default TrendinCard