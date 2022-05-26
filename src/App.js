import React from 'react';
import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import UserManager from './components/UserManager';
import './App.css';
import ContentArea from './components/ContentArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BannerImage />
        <div>
          <ContentArea />
        <h1> Notice your senses...</h1>
        <h3>26.05.2022 @Chekalina</h3>

        
        
       
        </div>
      
      </header>
    </div>
  );
}

export default App;
