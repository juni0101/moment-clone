const API_KEY = 'ca54c37ae5454afa24be2bdb5d789afa';

// 받아온 날씨데이터를 JSON으로 변환해 화면에출력
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.textContent = data.name
        weather.textContent = `${data.weather[0].main} / ${data.main.temp}`
    })
}


// 오류났을때 코드
function onGeoError(){
    alert("Can't find you. No weather for you.")
}   

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);