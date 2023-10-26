import logo from './logo.svg';
import './styles/App.css';
import data from './Mockup/mock-data.json'
import ShipsScrollView from './ShipView/ShipsView';

function App() {
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ships Carousele
        </p>
        <div>
          <ShipsScrollView/>
        </div>
      </header>
    </div>
  );
}

export default App;
