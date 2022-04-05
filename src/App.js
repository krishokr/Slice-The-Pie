import { useState } from 'react';
import './Styles/App.css';
import Splash from './Splash';
import MainView from './MainView';

function App() {
  const [showSplash, setshowSplash] = useState(true);

  function changeState() {
    return setshowSplash(false);
  }

  return (
    <div className="App">
      {showSplash ? <Splash changeState={changeState} /> : <MainView />}
    </div>
  );
}

export default App;
