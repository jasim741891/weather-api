// button and load data
const loadData = async () => {
    // console.log(loadButton)
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText)
    inputField.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText} &appid=b747b1a12ae02b9419fe43b1b5685891`
    // console.log(url)
    const res = await fetch(url)
    const data = await res.json();
    displayData(data)
}

const displayData = data => {
    // console.log(data)
    const weatherResult = document.getElementById('weather-result');
    // console.log(weatherResult);
    let str = "GMT +0:00";
    weatherResult.innerHTML = `
             <img src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> 

             <h1 class="text-success">${data.name}</h1>
             <h3><span class="text-success">${Math.round(data.main.temp - 273.15)}</span>&deg;C</h3>
             <h1 class="lead text-success">${data.weather[0].main}</h1>
             <h1 class="text-success">${str}</h1>
    
    `
}


