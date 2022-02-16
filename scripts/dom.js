const input = document.querySelector('.chang-loction');
const delails = document.querySelector('.text-details');
const card = document.querySelector('.card');
const time = document.querySelector('img.time');
const icone = document.querySelector('.icon img')
const colorIcone = document.querySelector('.text-details');
console.log(icone);
const updateUl = (city) => {
     console.log(city);
    const citydets = city.cityhttp;
    const weather = city.weather;

    const icones = `imag/icons/${weather.WeatherIcon}.svg`;
    icone.setAttribute('src',icones)
    // const { citydets, weather } = city;
    let timesrc = null;
    if (weather.IsDayTime) {
        timesrc = 'imag/day.svg'
        colorIcone.style.color="black"
    } else {
        timesrc = 'imag/night.svg';
        colorIcone.style.color = 'white';
    }

    time.setAttribute("src",timesrc)





    delails.innerHTML = `<h5 class="city-name">${citydets.EnglishName}</h5>
                <div class="weather-condition">${weather.WeatherText}</div>
                <div class="display">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`;
    card.classList.remove('hiden')
}

const newcity = async (city) => {
    const cityhttp = await getCity(city);
    const weather = await getWeather(cityhttp.Key);

    return {
        cityhttp,
         weather
    };
}

input.addEventListener('submit', (e)=>{
    
    const city = input.city.value.trim();
    input.reset();
    e.preventDefault();
    newcity(city)
        .then(city => updateUl(city))
        .catch(err => console.log(err))
})