import "./styles/App.css";
import data from "./Mockup/mock-data.json";
import ShipsScrollView from "./ShipView/ShipsView";

function App() {
  console.log(data);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Ships Carousele</p>
        </header>
      </div>
      <body>
        <ShipsScrollView />
      </body>
    </>
  );
}

export default App;
