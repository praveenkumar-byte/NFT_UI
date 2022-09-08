import React from 'react'
import Slider from 'react-slick';
import { TredingNftData } from '../Data/TredingNftData';
import TrendinCard from './TrendingNftCards/TrendinCard';
import './trendingnft.css';
import Button from '../../Buttons';


const settings={
  slidesToShow:3,
  slidesToScroll:3,
  autoPlay: true,
  speed: 500,
  arrows: false,
};

const TrendingNft = () => {
  return (
    <div className='Trending-nfts'>
      <div className='tn-title absolute-center'>
        <span className='header-gradient'>TRENDING NFTs</span>
      </div>
      <div className='tn-rbg-blob'></div>
        <Slider {...settings}>
        {TredingNftData.map((_nft)=>(
          <TrendinCard nft={_nft}/>
        ))}
        </Slider>
        <div className='tn-btn absolute-center'>
          <Button btnType="Secondary" btnText="SEE MORE" CustomClass="seemore"/>
        </div>
        
    </div>
  )
}

export default TrendingNft;