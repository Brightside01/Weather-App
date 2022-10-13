// Firstly I want the focus to be on our search bar on loading the app.
let focus = () => {
  let focusOnInput = document.getElementById("input").focus()
}
focus()

// Then we get our input and where we want to pass or values from the DOM.
let button = document.getElementById("button");
let city = document.getElementById("cityValue");
let temp = document.getElementById("tempValue");
let desc = document.getElementById("descValue")
let humi = document.getElementById("humidity")
let wind = document.getElementById("wind")
let icon = document.getElementById("icon")

//We add the function we want to carry out on our button.
button.addEventListener("click", function () {
// I retrieve the information or data the users pass into the search box.
let input = document.getElementById("input").value;

//we get our link to the weather API/Data-Base & also pass our users input into it.
const link = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=67771d35d14b059f91a6352b8ef51c1e&units=metric`;

// we fetch the data from the weather API
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
    let cityValue = data['name']
    let iconValue = data['weather'][0]['icon']
    let tempValue = data['main']['temp']
    let descValue = data['weather'][0]['description']
    let humidityValue = data['main']['humidity']
    let windValue = data['wind']['speed']
    let CloudImage = `http://openweathermap.org/img/wn/${iconValue}@2x.png`

    //Then we pass all returned data into our DOM
    city.innerText = "Weather in " + cityValue;
    temp.innerHTML = `<i class="fa-solid fa-temperature-empty"></i> ` + tempValue+'°c' 
    desc.innerText = descValue
    humi.innerHTML = `Humidity <i class="fa-solid fa-droplet"></i> : ` + humidityValue +'%'
    wind.innerHTML = `Wind <i class="fa-solid fa-wind"> </i> : ` + windValue + ' Km/h'
    icon.src = CloudImage
    })
    // Here we validate our function just incase the user inputs a wrong city or something else
    .catch((err) => alert("Weather cannot be found check your spelling"));
});
