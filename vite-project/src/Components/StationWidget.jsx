import { useQuery } from '@tanstack/react-query';
import { getTravelInfo } from '../API-requests/NS-API';
import './NS.css';

export default function StationWidget({ stationID }) {
    const url = `/api/reisinformatie-api/api/v2/departures?uicCode=${stationID}&maxJourneys=11`
    const { data, error, loading } = useQuery({ queryKey: ['departureInfo', stationID], queryFn: async () => await getTravelInfo(url), staleTime: 0, cacheTime: 60 * 1000, refetchInterval: 20 * 1000 },)
    console.log(data
    )

    return (
        <div>
            {data ? (
                data.payload.departures.map((departure, index) => (
                    <div className={`utrechtCSTrainDataContainer ${index % 2 === 0 ? 'bg-yellow-light' : 'bg-yellow-dark'}`} style={index===10 ? {display: 'none'}: {display:"grid"}} key={departure.UICCode}>
                        <p className='time'>{departure.actualDateTime.split('T')[1].split(':').slice(0, 2).join(':')}</p>
                        <p className='destination'>{departure.direction}</p>
                        {departure.routeStations.length > 0 ? (
                            <p className='routeVia'>Via {departure.routeStations.map(routeStation => routeStation.mediumName).join(', ')}</p>
                        ) : (
                            <p className='routeVia'>No route available</p>
                        )}
                        <p className='platform'>{departure.actualTrack}</p>
                    </div>
                ))
            ) : (
                <p>No stations available</p>
            )}
        </div>
    )
}