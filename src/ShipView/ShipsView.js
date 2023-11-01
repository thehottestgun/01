import data from "../Mockup/mock-data.json";
import '../styles/shipsView.css'

function ShipCard({ item }) {
  return (
    <div className="shipRecord">
      <h4>Name: {item.CodeName}</h4>
      <h4>Power: {item.EnginePower}</h4>
      <h4>Capacity: {item.Capacity}</h4>
      <h4>Size: {item.Size}</h4>
    </div>
  );
}

export default function ShipsScrollView() {
  return (
    <>
      <div className="scrollContainer">
        {data.map((item) => {
          return (
            <div key={item.CodeName} className="scrollItem">
              <ShipCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
