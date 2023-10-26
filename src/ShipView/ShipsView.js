import data from "../Mockup/mock-data.json";

function ShipCard({ item }) {
  return (
    <div className="shipRecord">
      <h4>
        {item.CodeName} {item.EnginePower} {item.Capacity} {item.Size}
      </h4>
    </div>
  );
}

export default function ShipsScrollView() {
  return (
    <>
      <div className="scrollContainer">
        {data.map((item) => {
          return (
            <div className="scrollItem">
              <ShipCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
