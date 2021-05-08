// api key
const apiKey = 'rpP1ZAAfdIsaW7tWC88ZKh9bmquoMLb4';

const getCityInfo = async (city) => {
    // city bse url get from accweatherapp
    const baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${apiKey}&q=${city}`;
    const cityinfo = await fetch(baseurl + query);
    const data = await cityinfo.json();
    return data[0];




}


const weatherinfo = async (citycode) => {

    const baseurl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${citycode}?apikey=${apiKey}`;
    const weatherinfo = await fetch(baseurl + query);
    const data = await weatherinfo.json();
    return data[0];


}



// getCityInfo('lahore')
//     .then(data => { return weatherinfo(data.Key) })
//     .then(data => { console.log(data.IsDayTime) })
//     .catch(err => console.log(err));