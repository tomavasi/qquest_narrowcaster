import { useEffect, useState } from "react";
import { getNearByStations, getTravelInfo } from "../API-requests/NS-API";
import StationWidget from "./StationWidget";
import NsLogo from './../assets/Images/NS-Logo.png';
import './NS.css';


const UtrechtCSTrainData = () => {
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
        <div className="stations widget bg-yellow-light">
            {stations.length > 0 ? (
                stations.map(station => (
                    <div className="widget-ut" key={station.UICCode}>
                        <p className="stationHeader"><img src={NsLogo} className="ns-logo" />{station.namen.lang}</p>
                        <div className="NSspacing bg-yellow-dark">
                            <p>Tijd</p>
                            <p>Bestemming</p>
                            <p>Trein</p>
                            <p className="platformHeader">Perron</p>
                        </div>
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