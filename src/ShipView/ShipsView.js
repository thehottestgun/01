import data from '../Mockup/mock-data.json'

function ShipCard({item}){
    return(
        <div className='shipRecord'>
        <h4>{item.CodeName} {item.EnginePower} {item.Capacity} {item.Size}</h4>
    </div>
    )
}

export default function ShipsCarousele(){
    return(
        <>
            <div className="scrollContainer">
                <div className="scrollItem">
                    {data.map((item) => {
                        return(
                           <ShipCard item={item}/>
                        )
                    })}
                </div>"
            </div>
        </>
    );
}