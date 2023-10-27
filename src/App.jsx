import './css/App.css';
import freeCodeCampLogo from '../src/images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img 
          className="freecodecamp-logo"
          src={freeCodeCampLogo} 
          alt='freeCodeCamp-Logo'  
        />
      </div>
      <div className='calculator-container'>
        <div className='calculator__row'></div>
        <div className='calculator__row'></div>
        <div className='calculator__row'></div>
        <div className='calculator__row'></div>
        <div className='calculator__row'></div>
      </div>
    </div>
  );
}

export default App;
