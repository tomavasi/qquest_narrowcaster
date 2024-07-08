import { useQuery } from '@tanstack/react-query';
import { getTravelInfo } from '../API-requests/NS-API';

export default function StationWidget({ stationID }) {
    const url = `/api/reisinformatie-api/api/v2/departures?uicCode=${stationID}&maxJourneys=10`
    const { data, error, loading } = useQuery({ queryKey: ['departureInfo', stationID], queryFn: async () => await getTravelInfo(url), staleTime: 0, cacheTime: 60 * 1000, refetchInterval: 20 * 1000 },)

    if (data) {
        console.log(data.payload.departures[0]);
    }

    return (
        <div>
            {data ? (
                data.payload.departures.map((departure, index) => (
                    <div className={`utrechtCSTrainDataContainer ${index % 2 === 0 ? 'bg-yellow-light' : 'bg-yellow-dark'}`} key={departure.UICCode}>
                        <p className='time'>{departure.actualDateTime.split('T')[1].split(':').slice(0, 2).join(':')}</p>
                        <p className='destination'>{departure.direction}</p>

                        {departure.routeStations.length > 0 ? (
                            <p className='routeVia'>{departure.routeStations.map(routeStation => routeStation.mediumName).join(', ')}</p>
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