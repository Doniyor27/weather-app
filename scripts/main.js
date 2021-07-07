search.onkeyup = (event) => {
  if(event.keyCode == 13) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=83d575dd622ce9a6e3f441d9ad917938`
    let response = fetch(api)
    response.then( res => res.json() )
        .then( data => {
          pogoda_icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          city_name.textContent =  data.name
          celcium.textContent =  (data.main.temp - 273 | 0) + '°C'
          fahrenheit.textContent = ((data.main.temp - 273.15) * 9/5 + 32 | 0) + '°F'
          osmon.textContent = data.weather[0].description
          namlik.textContent = "Namlik :" + data.main.humidity + '%'
          bosim.textContent = "Bosim :" + data.main.pressure 
          shamol.textContent = "Shamol tezligi :" + data.wind.speed
        })
  }
}

// let api = `https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=83d575dd622ce9a6e3f441d9ad917938`
// let response = fetch(api)
// response.then( res => res.json() ).then( data => console.log(data))
