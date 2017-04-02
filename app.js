const button =document.getElementById('weather_btn')

const display = document.getElementById('display')

button.addEventListener('click',()=> {

    const uri = 'https://locationiq.org/v1/search.php?key='

    const uri_weather = 'http://api.openweathermap.org/data/2.5/weather?APPID='

    const uri_forecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID='
  
    //alert("hello");
    const city = document.getElementById('cityname')
    const country = document.getElementById('countryn')

    //alert(city.value)

    const apiKey = '950fb364ee1d2103a153'

    const apiKey_weather = '3e18cd36cf86094107f93dcd33edbe92';

    //console.log(apiKey)

    //const cityData = []

    fetch(uri+apiKey+'&format=json&q='+city.value+','+country.value)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        //console.log(data[0].temp)
        console.log('the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}')
        fetch(uri_weather+apiKey_weather+'&units=metric&lat='+data[0].lat+'&lon='+data[0].lon)
          .then((res) => res.json())
          .then((wdata) => {

            fetch(uri_forecast+apiKey_weather+'&units=metric&cnt=5&units=metric&lat='+data[0].lat+'&lon='+data[0].lon)
              .then((res) => res.json())
              .then((fdata) => {
            //console.log(wdata)
            //const result = "<div class='wa_Weather'><div><div id='wa_temprature' class='wa_wthr'>Temperature : "+ wdata.main.temp +" &deg;C</div><div id='wa_sky' class='wa_wthr'>Weather : "+ wdata.weather[0].description +"</div><div id='wa_sky' class='wa_wthr_1'>wind velocity : "+ wdata.wind.speed +"m/s</div></div><div id='wa_location'><div id='wa_lat_label' class='wa_wthr'>latitude</div><div id='wa_lat' class='wa_wthr'>"+ wdata.coord.lat +"</div><div id='wa_lon_label' class='wa_wthr'>longitude</div><div id='wa_lon' class='wa_wthr'>"+ wdata.coord.lon +"</div></div></div>";

            const result = "<div class='wa_Weather'><div><div id='wa_temprature' class='wa_wthr'><div><div class='wa_float_1'><img src='images/"+ wdata.weather[0].icon +".png' alt='"+ wdata.weather[0].icon +".png' /></div><div class='wa_float_2'>"+ wdata.main.temp +" &deg;C</div><div class='wa_clear'></div></div><div><div class='wa_float_left'>Max : "+ wdata.main.temp_max +" &deg;C</div><div class='wa_float_left'>Min : "+ wdata.main.temp_min +" &deg;C</div><div class='wa_clear'></div></div></div><div id='wa_sky' class='wa_wthr_2'>Weather : "+ wdata.weather[0].description +"</div></div><div id='wa_sky' class='wa_wthr_1'><div class='wa_box'><div><img src='images/"+ fdata.list[0].weather[0].icon +".png' alt='"+ fdata.list[0].weather[0].icon +".png' /><br>"+ fdata.list[0].temp.day +" &deg;C</div></div><div class='wa_box'><div><img src='images/"+ fdata.list[1].weather[0].icon +".png' alt='"+ fdata.list[1].weather[0].icon +".png' /><br>"+ fdata.list[1].temp.day +" &deg;C</div></div><div class='wa_box'><div><img src='images/"+ fdata.list[2].weather[0].icon +".png' alt='"+ fdata.list[2].weather[0].icon +".png' /><br>"+ fdata.list[2].temp.day +" &deg;C</div></div><div class='wa_box'><div><img src='images/"+ fdata.list[3].weather[0].icon +".png' alt='"+ fdata.list[3].weather[0].icon +".png' /><br>"+ fdata.list[3].temp.day +" &deg;C</div></div><div class='wa_box'><div><img src='images/"+ fdata.list[4].weather[0].icon +".png' alt='"+ fdata.list[4].weather[0].icon +".png' /><br>"+ fdata.list[4].temp.day +" &deg;C</div></div></div><div id='wa_location'><div class='wa_float_left'><div id='wa_lat_label' class='wa_wthr'>latitude</div><div id='wa_lat' class='wa_wthr'>"+ wdata.coord.lat +"</div><div id='wa_lon_label' class='wa_wthr'>longitude</div><div id='wa_lon' class='wa_wthr'>"+ wdata.coord.lon +"</div></div><div class='wa_float_left'><div id='wa_lat_label' class='wa_wthr'>Humidity</div><div id='wa_lat' class='wa_wthr'>"+ wdata.main.humidity +" %</div><div id='wa_lon_label' class='wa_wthr'>Wind Velocity</div><div id='wa_lon' class='wa_wthr'>"+ wdata.wind.speed +"m/s</div></div><div class='wa_clear'></div></div></div>";


              display.innerHTML = result;
            })
              .catch((e) => console.log(e, "what's happening Marvels?"))

          })
          .catch((e) => console.log(e, "what's happening kavin?"))

        // ...data is a rest operator
        //cityData.push(...data)
      })
      .catch((e) => console.log(e, "what's happening dave?"))

      //console.log('city data array', cityData)
})
