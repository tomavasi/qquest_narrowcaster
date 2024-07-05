const NS_KEY = 'c9af8962e10e46bc92f8e98b501a3894';

export async function getNearByStations () {
    const response = await fetch('https://gateway.apiportal.ns.nl/nsapp-stations/v2/nearest?lat=52.08253517526941&lng=5.117591126554095&limit=2&includeNonPlannableStations=false', {
        method: 'GET',
        mode: 'no-cors',
        // Request headers
        headers: {
            'cache-control': 'cache',
            'Ocp-Apim-Subscription-Key': `${NS_KEY}`,}
    })
    if(response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch NearBy Stations API');
}
 
export async function getTravelInfo (url) {
   
    const data = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        // Request headers
        headers: {            
            'Ocp-Apim-Subscription-Key': `c9af8962e10e46bc92f8e98b501a3894`,},
    },).then(resp => resp.json()).catch(err => console.error(err))
    console.log(data);
    return data
}