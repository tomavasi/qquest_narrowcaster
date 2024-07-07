const NS_KEY = 'c9af8962e10e46bc92f8e98b501a3894';
const stationsUrl =  '/api/nsapp-stations/v2/nearest?lat=52.08253517526941&lng=5.117591126554095&limit=2&includeNonPlannableStations=false';

export async function getNearByStations () {
    const response = await fetch(`${stationsUrl}`, {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': `${NS_KEY}`,}
    })
    if(response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch NearBy Stations API');
}
 
export async function getTravelInfo (url) {
   
    const response= await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        // Request headers
        headers: {            
            'Ocp-Apim-Subscription-Key': `c9af8962e10e46bc92f8e98b501a3894`,},
    },)
    if(response.ok){
        console.log(response.status)
        return response.json()
    }
    throw new Error('Failed to fetch Travel Info API');
}