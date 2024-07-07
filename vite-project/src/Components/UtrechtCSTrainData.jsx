import { useEffect, useState } from "react";
import { getNearByStations, getTravelInfo } from "../API-requests/NS-API";
import StationWidget from "./StationWidget";


const UtrechtCSTrainData = ({ className, time, destination, platform, routeVia }) => {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const nearByStations = await getNearByStations();
                setStations(nearByStations.payload);
            } catch (error) {
                console.error('Error fetching nearby stations:', error);
            }
        };
        fetchStations();
    }, []);
    return (
        <div className="stations">
            {stations.length > 0 ? (
                stations.map(station => (
                    <div className="widget-ut" key={station.UICCode}>
                        <p>{station.namen.lang}</p>
                        <StationWidget stationID={station.UICCode} />
                    </div>
                ))
            ) : (
                <p>No stations available</p>
            )}
        </div>
    );
}

export default UtrechtCSTrainData;