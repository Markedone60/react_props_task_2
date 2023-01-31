import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';

const props = require('./etsy.json');

function App() {
  return (
    <div className="App">
      <Listing items={props}/>
    </div>
  );
}

export default App;
