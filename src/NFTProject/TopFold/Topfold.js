import React from 'react'
import Button from '../../Buttons';
import './topfold.css';
const Topfold = () => {
  return (
    <>
    <div className='topfold absolute-center max-width'>
      <div className='topfold-left'>
        <div className='tf-heading'>
          Design Creativly & sell creativity  <span className='header-gradient'>Extraodinary</span> NFTS
          </div>
          <div className='tf-discription'>
          Make sure that you will buying and selling the  most trending NFT'S Here. Welcome to NFT'S!
          </div>
          <div className='tf-left-btns'>
            <Button btnType='PRIMARY' btnText='EXPLORE' CustomClass='tf-left-btn1'/>
            <Button btnType='SECONDARY' btnText='CREATE'CustomClass='tf-left-btn2'/>
          </div>
          <div className='tf-fold-info '>
            <div className='tf-fold-item absolute-center'>
              <div className='tf-fold-item-count'>400K+</div>
              <div className='tf-fold-item-label'>Collections</div>
            </div>
            <div className='tf-fold-item absolute-center'>
              <div className='tf-fold-item-count'>200K+</div>
              <div className='tf-fold-item-label'>Artists</div>
            </div>
            <div className='tf-fold-item absolute-center'>
              <div className='tf-fold-item-count'>500K+</div>
              <div className='tf-fold-item-label'>Community</div>
            </div>
          </div>
      </div>
      <div className='tf-right'>
        <div className='tf-rbg-blob'></div>
        <div className='tf-right-dim'>
          <div className='tf-right-dim-item absolute-center'>
            <img className='tf-right-dim-img' 
            src="https://d2vi0z68k5oxnr.cloudfront.net/273dc24c-5b5f-45d9-83d3-5db578bdce79/original.gif"
             alt='NFT GIF'/>
          </div>
          <div className='tf-right-dim-item absolute-center'>
            <img className='tf-right-dim-img' 
            src="https://lh3.googleusercontent.com/Ldsk9NpVnIoY2Ci4iKaTc78gA2a03at3Fni_AsFkG19svnkAfkHdTVdWpvmVY0Esr4PRENczYtZ3jEHSyr7Aoebk7s9bQZx82W4B=w418"
             alt='NFT GIF'/>
          </div>
          <div className='tf-right-dim-item absolute-center'>
            <img className='tf-right-dim-img' 
            src="https://openseauserdata.com/files/24d69f2fb87719edc973d686a0b43226.gif"
             alt='NFT GIF'/>
          </div>
          <div className='tf-right-dim-item absolute-center'>
            <img className='tf-right-dim-img'
            src='https://openseauserdata.com/files/89e468471b05a0d3f49b0b14def8879a.gif'
            alt='NFT GIF'/>
          </div>

        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default Topfold