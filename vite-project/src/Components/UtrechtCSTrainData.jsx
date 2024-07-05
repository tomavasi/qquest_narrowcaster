import { getNearByStations, getTravelInfo } from "../API-requests/NS-API";

const UtrechtCSTrainData = ({className, time, destination, platform, routeVia}) => {
    const nearByStations = getNearByStations();
    const travelInfo = getTravelInfo();

    console.log(nearByStations);

    return(
        <div className={className}>
            <p className="time">{time}</p>
            <p className="destination">{destination}</p>
            <p className="platform">{platform}</p>
            <p className="routeVia">{routeVia}</p>
        </div>
    )
}

export default UtrechtCSTrainData;