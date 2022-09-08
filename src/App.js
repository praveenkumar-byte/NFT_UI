import React from 'react';
import BrandIntegration from './NFTProject/BrandIntegration/BrandIntegration';
import Footer from './NFTProject/Footer';
import Header from './NFTProject/Header/Header';
import Infosection from './NFTProject/InfoSection';
import TrendingNft from './NFTProject/TrendingNft';
// import Todo from './Components/Todo';
import './App.css';
import Topfold from './NFTProject/TopFold/Topfold';
function App1() {
  return (
    <>
    <Header/>
    <Topfold/>
    <BrandIntegration/>
    <TrendingNft/>
    <Infosection/>
    <Footer/>
    </>
  );
}

export default App1;
