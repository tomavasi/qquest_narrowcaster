import { useQuery } from '@tanstack/react-query';
import { getTravelInfo } from '../API-requests/NS-API';
export default function StationWidget ({stationID}) {
    const url = `/api/reisinformatie-api/api/v2/departures?uicCode=${stationID}&maxJourneys=10`
    const {data, error, loading} = useQuery({queryKey:['departureInfo', stationID ], queryFn: async () => await getTravelInfo(url), staleTime: 0, cacheTime : 60 * 1000, refetchInterval: 20 * 1000},)
    return (
        <div>
        {data ? (
            data.payload.departures.map(departure => (
                <div className="widget-ut" key={departure.UICCode}>
                    <p>{departure.actualDateTime}</p>
                </div>
            ))
        ) : (
            <p>No stations available</p>
        )}
    </div>
    )
}