const form = document.querySelector('form')
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = form.city.value.trim();
    console.log(cityValue);
    form.reset();
    getupdatedinfo(cityValue).then(data => {
        updateUI(data);




    })
        .catch(err => { console.log(err) })

})

const getupdatedinfo = async (cityname) => {
    const cityinfo = await getCityInfo(cityname);
    const weather = await weatherinfo(cityinfo.Key)
    //console.log(cityinfo);
    return { cityinfo, weather };

}

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {




    const { cityinfo, weather } = data;
    console.log(cityinfo, weather);
    const updateWeather = `
    <h5 class="my-5">${cityinfo.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
    `
    details.innerHTML = updateWeather;

    let imgresource = null;
    console.log(weather.IsDayTime);
    if (weather.IsDayTime) {
        imgresource = './img/day.svg';
    }
    else {
        imgresource = './img/night.svg';

    }
    console.log(icon);
    time.setAttribute('src', imgresource);

    let iconresource = weather.WeatherIcon;
    icon.setAttribute('src', `./img/icons/${iconresource}.svg`);
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

}