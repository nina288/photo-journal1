import React from 'react';
import BannerImage from './components/BannerImage';


import './App.css';
import ContentArea from './components/ContentArea';

const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BannerImage />
        <div>
          <ContentArea />
        <h1> Notice your senses...</h1>
        <h3>{date} @Chekalina</h3>

        
        <div className="comment">Дата {date}  &nbsp;
  вход в систему по МСК {time}
</div>
       
        </div>
      
      </header>
    </div>
  );
}

export default App;
