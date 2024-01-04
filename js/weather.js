const API_KEY = 'ca54c37ae5454afa24be2bdb5d789afa';

// 받아온 날씨데이터를 JSON으로 변환해 화면에출력
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherIcon = document.querySelector('#weather-icon')
        const weatherDescription = document.querySelector('#weather-description');
        const city = document.querySelector('#city');

        const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.setAttribute('src', iconUrl);

        // 날씨상태 텍스트표시
        city.textContent = data.name;
        weatherDescription.textContent = `${data.main.temp} ºC `
    })
}


// 오류났을때 코드
function onGeoError(){
    alert("Can't find you. No weather for you.")
}   

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);