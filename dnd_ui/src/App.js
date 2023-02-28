import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import DicePage from './pages/DicePage/DicePage';
import { LandingPage } from './pages/landing/LandingPage';

function App() {
  const [landed, setLanded] = useState(false);

  const roll = () => {
    setLanded(!landed);
  }

  return (



    <div >
      {!landed ? 
      <LandingPage roll = {roll}/> :
      <div>
      <Nav />
      <DicePage />
      </div>
    
    }
      
    </div>
  );
}

export default App;
