import React from 'react'
import { MdInput, MdOutlineDashboard } from "react-icons/md";
import { TiCloudStorageOutline } from "react-icons/ti";
import { InfoItems } from '../Data/InfoItems';
// import InfoItm from './InfoItem/InfoItm';
import './infosection.css';


const Infosection = () => {
  return (
    <div className='info-section max-width cur-po'>
      <div className='is-header absolute-center'>
        <span className='header header-gradient'>Create & sell NFTs</span>
      </div>
      <div className='my-div'>
        <div className='my-div-item'>
          <h1 className='icon absolute-center'><MdInput/></h1>
          <h3 className='title absolute-center'>{InfoItems[0].title}</h3>
          <div className='dis absolute-center'>{InfoItems[0].dis}</div>
        </div>
        <div className='my-div-item'>
          <h1 className='icon absolute-center'><TiCloudStorageOutline /></h1>
          <h3 className='title absolute-center'>{InfoItems[1].title}</h3>
          <div className='dis absolute-center'>{InfoItems[1].dis}</div>
        </div>
        <div className='my-div-item'>
          <h1 className='icon absolute-center'><MdOutlineDashboard /></h1>
          <h3 className='title absolute-center'>{InfoItems[2].title}</h3>
          <div className='dis absolute-center'>{InfoItems[2].dis}</div>
        </div>
      </div>
    </div>

  )
}

export default Infosection